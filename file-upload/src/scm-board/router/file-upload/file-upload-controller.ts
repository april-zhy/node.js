import fs from 'fs';
const http = require('http');
import { File, Files } from 'formidable';
import { RouterContext } from 'koa-router';
import sevenBin from '7zip-bin';
const pathTo7zip = sevenBin.path7za
import { extractFull } from 'node-7z';

import config from 'config'
import { caUtils } from '../utils';
import { ResponseUtils } from 'src/scm-board/service-fw/utils';

const upload_conf = config.get<{ host: string; tempPath: string; outputPath: string; accessFile: string; }>('upload');
const url_conf = config.get<{ thumbor: { hostUrl: string; } }>('upstream');

async function getUploadHTML(ctx: RouterContext) {
  const fileName = "./src/scm-board/router/file-upload/upload.html";
  const res = fs.readFileSync(fileName);
  ctx.res.setHeader('Content-Type', 'text/html;charset="utf-8');
  ctx.body = res;
  return;
}

async function uploadFile(ctx: RouterContext) {
  const files: Files = ctx.request.files;
  if (!(files && files.image)) {
    ctx.body = ResponseUtils.error<any>({
      error_no: 100301
    });
    return;
  }
  if (files.image && files.image['length']) {
    ctx.body = ResponseUtils.error<any>({
      error_no: 100302
    });
    return;
  }

  console.log(upload_conf);
  try {
    // 另存为本地临时文件
    const tmpPath = await _saveFile(files);
    // 解压
    const originPath = upload_conf.outputPath + '/origin';
    const imgPathListStr = await _decompression(tmpPath, originPath);
    // 转码
    const thumbPath = upload_conf.outputPath + '/thumb';
    await _thumbImgList(imgPathListStr, thumbPath);
  } catch (error) {
    ctx.body = ResponseUtils.error<any>({
      error_no: 100302,
      error_message: error
    });
    return;
  }

  ctx.body = ResponseUtils.normal<any>({
    data: '上传成功'
  });
  return;
}

async function getImgUrls(ctx: RouterContext) {
  const filePath = upload_conf.accessFile;
  if (!fs.existsSync(filePath)) {
    ctx.body = ResponseUtils.error<any>({
      error_no: 100304
    });
    return;
  }
  try {
    const res = fs.readFileSync(filePath);
    const result = JSON.parse(res.toString())
    ctx.body = ResponseUtils.normal<any>({
      data: result
    });
    return;
  } catch (e) {
    ctx.body = ResponseUtils.error<any>({
      error_no: 100305
    });
    return;
  }
}


async function parseZipImg(ctx: RouterContext) {
  const tmpPath = ctx.request.body.temp_path;
  const outputPath = ctx.request.body.output_path;
  if (!tmpPath || !outputPath) {
    ctx.body = ResponseUtils.error<any>({
      error_no: 100203
    });
    return;
  }
  try {
    await _decompression(tmpPath, outputPath);
    ctx.body = ResponseUtils.normal<any>({
      data: '解析成功'
    });
    return;
  } catch (error) {
    ctx.body = ResponseUtils.error<any>({
      error_no: 100303,
      error_message: '解析失败'
    });
    return;
  }
}


async function thumbImg(ctx: RouterContext) {
  const imgList = ctx.request.body.img_list;
  if (!imgList) {
    ctx.body = ResponseUtils.error<any>({
      error_no: 100203
    });
    return;
  }
  const thumbPath = upload_conf.outputPath + '/thumb';
  try {
    await _thumbImgList(imgList, thumbPath);
  } catch (error) {
    ctx.body = ResponseUtils.error<any>({
      error_no: 100305
    });
    return;
  }
  ctx.body = ResponseUtils.normal<any>({
    data: '转码成功'
  });
  return;
}


// 另存为本地临时文件
function _saveFile(files): Promise<string> {
  const file = files.image as File;
  const suffix = file.name.split('.').pop();
  const tmpPath = `${upload_conf.tempPath}/images.${suffix}`;
  return new Promise((resolve, reject) => {
    try {
      caUtils.mkdir(tmpPath);
      const data = fs.readFileSync(file.path);
      fs.writeFileSync(tmpPath, data)
      resolve(tmpPath);
    } catch (err) {
      reject('文件读取失败，请上传正确的压缩文件夹！')
    }
  });
}

/**
 * @param tempPath 
 * @param outputPath
 * 将 tempPath 路径下的压缩文件 解压之后，解压后的文件放至 outputPath，删除原压缩文件
 */
function _decompression(tempPath: string, outputPath: string): Promise<string> {
  const outputArr = [];
  const myStream = extractFull(tempPath, outputPath, {
    $bin: pathTo7zip,
    $progress: true
  });
  return new Promise((res, rej) => {
    myStream.on('data', function (data) {
      outputArr.push(upload_conf.host + '/upload/origin/' + data.file)
    });
    myStream.on('end', function () {
      console.log('Complete!');
      if (outputArr.length) {
        res(outputArr.join(','));
      } else {
        rej('文件夹为空，请上传正确的压缩文件夹！');
      }
    });
    myStream.on('error', (err) => {
      console.error('Error:', err)
      rej('文件解压失败，请上传正确的压缩文件夹！');
    });
  });
}

/**
 * @param imgList
 * @param thumbPath 
 * 1、从imgList中读取原始拖路径
 * 2、转为webp格式，存放至 thumbPath, 并将外部访问路径存放至 outputPath.json 文件
 */
async function _thumbImgList(imgList, thumbPath) {
  try {
    const imgPathList = imgList.split(',');
    const formatIngPath = [];
    for (let i = 0; i < imgPathList.length; i++) {
      const imgOriginPath = imgPathList[i];
      const name = imgOriginPath.split('/').pop().split('.').shift();
      const imgData = await _thumbImg(imgOriginPath, 100);
      const path = thumbPath + '/' + name + '.webp';
      caUtils.createFile(imgData, path);
      formatIngPath.push(upload_conf.host + '/upload/thumb/' + name + '.webp');
    }
    const obj = {
      path: formatIngPath.join(',')
    };
    caUtils.createFile(JSON.stringify(obj), upload_conf.accessFile);
  } catch (error) {
    throw new Error(error.toString());
  }
}

/**
 * 压缩图片质量,返回压缩后图片的Buffer数据
 * 参考文档：https://thumbor.readthedocs.io/en/latest/quality.html
 * @param {*} imgPath 图片网络路径,比如 https://www.baidu.com/1.jpg
 * @param {*} mimeType 图片类型(由于thumbor只支持jpg的压缩，因此其他类型的图片需先转化为jpg，再压缩)
 * @param {*} quality 图片质量 百分比,0到100
 */
async function _thumbImg(imgPath, quality) {
  const filters = [];
  filters.push('format(webp)');
  const url = `${url_conf.thumbor.hostUrl}/unsafe/filters:${filters.join(':')}/${encodeURIComponent(imgPath)}`;
  const data = [];
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      res.on('data', (dataChunk) => {
        data.push(dataChunk);
      });
      res.on('end', () => {
        resolve(Buffer.concat(data));
      });
      res.on('error', function (err) {
        reject(err);
      });
    });
  });
}


export const upload_ctrl = {
  getUploadHTML,
  uploadFile,
  thumbImg,
  parseZipImg,
  getImgUrls
};
