import Router from 'koa-router';

import upload from './file-upload/file-upload-router';

const router = new Router();
router.use(upload.routes(), upload.allowedMethods());

router.get('/', async ctx => {
  ctx.body = 'Welcome to file upload!';
});

export { router };
