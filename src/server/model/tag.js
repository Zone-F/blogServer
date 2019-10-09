/**
 * 实现标签的数据模型
 */
const TagModel = require('../db/schema/tag')
const mongoose = require("mongoose")
const resMsg = require("../utils/utils").resMsg

class Tag {
  constructor() {}
  // 新增标签
  async newTag(params) {
    try {
      let res = await TagModel.findOne({
        name: params.name
      })
      if (res) {
        return resMsg(201, '标签已存在')
      }
      await new TagModel({
          _id: new mongoose.Types.ObjectId(),
          ...params
        })
        .save()
      return resMsg(200, '新增成功')
    } catch (err) {
      return resMsg(500, '新增失败', err.message)
    }
  }
  // 修改标签
  async putTag(params) {
    try {
      await TagModel.updateOne({
        _id: params.id
      }, {
        name: params.name
      });
      return resMsg(200, '修改成功')
    } catch (err) {
      return resMsg(500, '修改失败', err.message)
    }
  }
  //删除标签
  async delTag(params) {
    try {
      await TagModel.findByIdAndRemove({
        _id: params.id
      })
      return resMsg(200, '删除成功')
    } catch (err) {
      return resMsg(500, '删除失败', err.message)
    }
  }
  //获取标签列表
  async tagList() {
    try {
      const res = await TagModel.find()
      return {
        state: 200,
        data: res
      }
    } catch (err) {
      return resMsg(500, '获取失败', err.message)
    }

  }
}

module.exports = Tag;