<?php
namespace app\index\controller;
use app\model\Article as ArticleModel;
// use ArticleModel;

class Article
{
    /**
     * @api {post} :8181/index/article/article_list 分页获取文章列表
     * @apiName 文章列表
     * @apiGroup phpArticle
     *
     * @apiParam {Number} tid 标签id .
     * @apiParam {String} key 搜索关键词 .
     *
     * @apiSuccess {Array} article_list 文章列表.
     */
    public function article_list(){
      $Article = new ArticleModel();
      $data = $Article->article_list();
      return json($data);
    }

    /**
     * @api {post} :8181/index/article/del_article 删除文章
     * @apiName 删除文章
     * @apiGroup phpArticle
     *
     * @apiParam {Number} id 文章的id .
     *
     * @apiSuccess {Array} article_list 文章列表.
     */
    public function del_article(){
      $Article = new ArticleModel();
      $data = $Article->article_list();
      return json($data);
    }
}
