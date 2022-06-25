const Koa = require('koa');
const Router = require('koa-router');
const eventRouter = require('./routers/event.js');
 
const app = new Koa();
const router = new Router();
const koaBody = require('koa-body');
 
router.get('/', ctx => {
  ctx.body = {
    "code": 200,
    "msg": "success",
    "data": "You have connected!!"
  } 
});

app.use(koaBody());
router.use(eventRouter);
app.use(router.routes()).use(router.allowedMethods());
 
app.listen(8090, () => {
  console.log('正在监听8090端口的服务');
});
