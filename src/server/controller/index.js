const router = require('koa-simple-router')
const Article = require('./article')
const articleController = new Article();

module.exports = (app) =>{
  app.use(router(_ => {
    _.get('/', (ctx, next) => {
      ctx.body = 'hello'
    })
    _.post('/article_list', articleController.articleList())
  }));
}
