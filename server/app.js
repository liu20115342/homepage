/*
 * @Author: liujian
 * @LastEditors: liujian
 * @Description: server入口文件
 */ 
const Koa = require('koa')

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = '首页'
})

app.listen(3001, () => {
  console.log('服务已启动，端口为：3001');
})