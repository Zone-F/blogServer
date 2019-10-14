/**
 * 实现article的数据模型
 * 均未实现事务操作
 */
const ArticleModel = require('../db/schema/article')
const ClassifyModle = require('../db/schema/classify')
const mongoose = require("mongoose")
const resMsg = require("../utils/utils").resMsg

class Article {
  constructor() {}
  // 新增文章
  async newArticle(params) {
    //未实现事务操作
    try {
      let res = await new ArticleModel({
        _id: new mongoose.Types.ObjectId(),
        title: params.title,
        body: params.body
      }).save()
      // 更新文章标签中间表
      let data = [];
      let tagArray = params.tags.split(",");
      tagArray.forEach((item, index) => {
        data.push({
          aid: res._id,
          tid: mongoose.Types.ObjectId(tagArray[index])
        })
      })
      await ClassifyModle.insertMany(data);

      return resMsg(200, '新增成功')
    } catch (err) {
      return resMsg(500, '新增失败', err.message)
    }
  }
  // 获取文章详情
  async getArticle(params) {
    try {
      let res = await ArticleModel.find({
        _id: params.id
      });
      if (res.length == 0) {
        throw {
          message: '文章不存在'
        }
      };
      let tags = await ClassifyModle.find({
          aid: params.id
        })
        .populate('tid')
      return {
        state: 200,
        data: res,
        tags: tags
      }
    } catch (err) {
      return resMsg(500, '查询失败', err.message)
    }
  }
  //删除标签
  async delArticle(params) {
    try {
      let res = await ArticleModel.deleteOne({
        _id: params.id
      })
      if (res.deletedCount == 0) {
        throw {
          message: '文章不存在'
        }
      };
      await ClassifyModle.deleteMany({
        aid: params.id
      })
      return resMsg(200, '删除成功')
    } catch (err) {
      return resMsg(500, '删除失败', err.message)
    }
  }
  //文章修改
  async putArticle(params) {
    try {
      let doc = {};
      params.title ? doc['title'] = params.title : ''
      params.body ? doc['body'] = params.body : ''
      doc['updateTime'] = Date.now()
      let res = await ArticleModel.findOneAndUpdate({
        _id: params.id
      }, doc)
      if (!res) {
        throw {
          message: '文章不存在'
        }
      }
      if (params.tags) {
        //如果要修改标签
        await ClassifyModle.deleteMany({
          aid: params.id
        })
        // 更新文章标签中间表
        let data = [];
        let tagArray = params.tags.split(",");
        tagArray.forEach((item, index) => {
          data.push({
            aid: params.id,
            tid: mongoose.Types.ObjectId(tagArray[index])
          })
        })
        await ClassifyModle.insertMany(data);
      }
      return resMsg(200, '修改成功')
    } catch (err) {
      return resMsg(500, '操作失败', err.message)
    }
  }
  //分页获取文章列表
  async getList(params) {    
    let pageNum = params.pageNum || 1,
      pageSize = params.pageSize || 10;
    try {
      let total = await ArticleModel.find()
      let res = await ArticleModel
        .find()
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize);
      // console.log('res',res);
      return {
        state: 200,
        data: res,
        pageNum,
        pageSize,
        total: total.length
      }
    } catch (err) {
      return resMsg(500, '获取失败', err.message)
    }
  }
}

module.exports = Article;