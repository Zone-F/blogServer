const config = require('./config')
const SafeRequest = require('./utils/fetch')
const Koa = require('koa');

const app = new Koa();


//注册路由
require("./controller")(app);

app.listen(3000,()=>{
  console.log('server is listen in 3000');
});
