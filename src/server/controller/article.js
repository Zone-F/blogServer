const Article = require('../model/article')

class ArticleController {
  constructor() {}
  /**
   * @api {post} /article 新增文章
   * @apiName newArticle
   * @apiGroup Article
   *
   * @apiParam {String} title 标题.
   * @apiParam {String} body 正文.
   * @apiParam {String} tags '_tid1,tid2'.
   */
  newArticle(ctx, next) {
    return async (ctx, body) => {
      const article = new Article();
      const result = await article.newArticle(ctx.request.body);
      ctx.body = result;
    }
  }
  /**
   * @api {post} /article/detail 获取文章
   * @apiName getArticle
   * @apiGroup Article
   *
   * @apiParam {String} id 文章_id.
   * @apiSuccess {Object} data [{_id:'',title:'',body:'',updateTime:'',createTime:''}].
   * @apiSuccess {Object} tags [{_id:'',tid:[{name:'',tid:''}]}]
   */
  getArticle(ctx, next) {
    return async (ctx, body) => {
      const article = new Article();
      const result = await article.getArticle(ctx.request.body);
      ctx.body = result;
    }
  }
  /**
   * @api {del} /article 删除文章
   * @apiName delArticle
   * @apiGroup Article
   *
   * @apiParam {String} id 文章_id.
   * @apiParam {String} title 标题.
   * @apiParam {String} body 正文.
   * @apiParam {String} tags '_tid1,tid2'.
   * @apiSuccess {Object} data [{_id:'',title:'',body:'',updateTime:'',createTime:''}].
   * @apiSuccess {Object} tags [{_id:'',tid:[{name:'',tid:''}]}]
   */
  delArticle(ctx, next) {
    return async (ctx, body) => {
      const article = new Article();
      const result = await article.delArticle(ctx.request.body);
      ctx.body = result;
    }
  }
  /**
   * @api {put} /article 修改文章
   * @apiName putArticle
   * @apiGroup Article
   *
   * @apiParam {String} id 文章_id.
   * @apiParam {String} title 标题.
   * @apiParam {String} body 正文.
   * @apiParam {String} tags '_tid1,tid2'.
   */
  putArticle(ctx, next) {
    return async (ctx, body) => {
      const article = new Article();
      const result = await article.putArticle(ctx.request.body);
      ctx.body = result;
    }
  }
  /**
   * @api {post} /article/list 获取文章列表
   * @apiName ，ArticleList
   * @apiGroup Article
   *
   * @apiParam {Number} pageNum 第n页.
   * @apiParam {Number} pageSize 每页n条.
   * @apiSuccess {Object} data [{_id:'',title:'',body:'',updateTime:'',createTime:''}].
   * @apiSuccess {Number}  pageNum 当前页数
   * @apiSuccess {Number}  total 总条数
   * @apiSuccess {Number}  pageSize 每页条数
   */
  getList(ctx, next) {
    return async (ctx, body) => {
      const article = new Article();
      const result = await article.getList(ctx.request.body);
      ctx.body = result;
    }
  }
}
module.exports = ArticleController;