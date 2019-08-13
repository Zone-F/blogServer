define({ "api": [
  {
    "type": "post",
    "url": "/article_list",
    "title": "分页获取文章列表",
    "name": "GetArticleList",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "article_list",
            "description": "<p>文章列表.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/controller/article.js",
    "groupTitle": "Article"
  }
] });
