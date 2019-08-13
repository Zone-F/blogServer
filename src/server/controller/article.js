const Article = require('../model/article')

class ArticleController {
  constructor() {}
  /**
   * @api {post} /article_list 分页获取文章列表
   * @apiName GetArticleList
   * @apiGroup Article
   *
   * @apiParam {Number} id Users unique ID.
   *
   * @apiSuccess {Array} article_list 文章列表.
   */
  articleList (ctx, next){
    return async (ctx,body) =>{
      const article = new Article();
      const result = await article.getList();
      console.log(result);
      ctx.body = result;
    }
  }
}
module.exports = ArticleController;