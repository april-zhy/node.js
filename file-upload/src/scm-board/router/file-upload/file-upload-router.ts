import Router from 'koa-router';
import { upload_ctrl } from './file-upload-controller';

const router = new Router();

router.prefix('/');

/**
 * @api {GET} /upload   请求图片上传页面
 * @apiDescription    请求图片上传页面
 * @apiVersion 1.0.0
 * @apiName uploadHTML
 * @apiGroup upload
 *
 */
router.get('/upload', upload_ctrl.getUploadHTML);

/**
 * @api {POST} /upload   上传图片压缩文件
 * @apiDescription  上传图片压缩文件
 * @apiVersion 1.0.0
 * @apiName uploadFile
 * @apiGroup upload
 *
 * @apiParam (body) {files}  path
 */
router.post('/upload', upload_ctrl.uploadFile);

/**
 * @api {GET} /upload/img_urls   请求图片访问地址
 * @apiDescription  请求图片访问地址
 * @apiVersion 1.0.0
 * @apiName getImgUrls
 * @apiGroup upload
 *
 */
router.get('/upload/img_urls', upload_ctrl.getImgUrls);


/**
 * @api {PUT} /image/parse   解析上传的压缩文件
 * @apiDescription  解析上传的压缩文件
 * @apiVersion 1.0.0
 * @apiName parseZipImg
 * @apiGroup image
 *
 * @apiParam (body) {string}  temp_path
 * @apiParam (body) {string}  out_path       
 */
router.post('/image/parse', upload_ctrl.parseZipImg);

/**
 * @api {PUT} /image/thumb   图片转码
 * @apiDescription  图片转码
 * @apiVersion 1.0.0
 * @apiName thumbImg
 * @apiGroup image
 *
 * @apiParam (body) {string}  img_path
 * @apiParam (body) {string}  img_type
 */
router.post('/image/thumb', upload_ctrl.thumbImg);

export default router;
