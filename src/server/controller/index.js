const Router = require('koa-router');
const router = new Router();
const bodyParser = require('koa-bodyparser')

const Article = require('./article')
const articleController = new Article();
const Tag = require('./tag')
const TagController = new Tag();

module.exports = (app) => {
  app.use(bodyParser())  
  router
    // 文章相关
    .post('/article', articleController.newArticle())
    .post('/article/detail', articleController.getArticle())
    .put('/article', articleController.putArticle())
    .del('/article', articleController.delArticle())
    .post('/article/list', articleController.getList())

    //标签相关
    .post('/tag/list', TagController.tagList())
    .post('/tag', TagController.newTag())
    .put('/tag', TagController.putTag())
    .del('/tag', TagController.delTag())
  app.use(router.routes())
    .use(router.allowedMethods());
}