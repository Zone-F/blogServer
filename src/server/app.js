const config = require('./config')
const SafeRequest = require('./utils/fetch')
const Koa = require('koa');

const app = new Koa();

//连接数据库
require('./db/connect')
//注册路由
require("./controller/index")(app);


app.listen(3000,()=>{
  console.log('server is listen in 3000');
});
