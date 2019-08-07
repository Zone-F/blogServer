const config = require('./config')
const SafeRequest = require('./utils/fetch')


// const Koa = require('koa');
// const app = new Koa();
// app.listen(3000);
// const safeRequest = new SafeRequest("books/index");

async function test(){
  const safeRequest = new SafeRequest('index/index/test');

  let data =  await safeRequest.fetch({method:'post'})
  console.log(data);
}
test()
