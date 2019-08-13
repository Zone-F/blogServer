<?php
namespace app\model;

use think\Model;

class Article extends Model
{
  /**
   * 文章列表页
   * @param $tid 标签id
   * @param $key 搜索关键词
   * @return Array
   */
  public function article_list($tid= 0,$key = '')
  { 
    $Article = new Article;
    $list = $Article::paginate(10);
    return $list;
  }
}