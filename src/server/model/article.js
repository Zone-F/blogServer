
/**
 * 实现article的数据模型
 */
const SafeRequest = require("../utils/fetch.js");

class Article {

  constructor(app) {}
  // 获取文章列表
  getList() {    
    const safeRequest = new SafeRequest("index/Article/article_list");
    return safeRequest.fetch({});
  }
}

module.exports = Article;