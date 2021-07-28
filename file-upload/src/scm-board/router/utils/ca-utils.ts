import fs from 'fs';


function mkdir(filePath: string) {
  try {
    const arr = filePath.split('/').filter(d => d.indexOf('.') === -1);
    let dir = arr[0];
    for (let i = 1; i <= arr.length; i++) {
      console.log(fs.existsSync(dir));
      if (!fs.existsSync(dir) && dir.indexOf('.') === -1) {
        fs.mkdirSync(dir);
      }
      if (i !== arr.length) {
        dir = dir + '/' + arr[i];
      }
    }
  } catch (error) {
    throw new Error(error.toString());
  }
}

// 如是文件，则直接删除
// 如是文件夹，则递归
function rmFileRecursive(filePath: string) {
  if (fs.existsSync(filePath)) {
    if (fs.statSync(filePath).isFile()) {
      fs.unlinkSync(filePath);
    } else if (fs.statSync(filePath).isDirectory()) {
      // files = fs.readdirSync(filePath);
      // files.forEach(function (file) {
      //   console.error(file);
      //   // var curPath = path.join(filePath, file);
      //   // if (fs.statSync(curPath).isDirectory()) { // recurse
      //   //   rmFileRecursive(curPath);
      //   // } else {
      //   //   fs.unlinkSync(curPath);
      //   // }
      // });
      // // rmFileRecursive(curPath);
      // fs.rmdirSync(filePath);
    }
  }
}

// 如已存在文件，则先删除
function createFile(fileData, filePath) {
  try {
    console.log('create file', filePath);
    if (fs.existsSync(filePath)) {
      rmFileRecursive(filePath);
    }
    const fileWriteStream = fs.createWriteStream(filePath);
    fileWriteStream.write(fileData);
    fileWriteStream.end();
  } catch (error) {
    throw new Error(error.toString());
  }
}


function asleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


export const caUtils = {
  mkdir,
  asleep,
  createFile,
  rmFileRecursive
};