const TagModel = require('../model/tag')

class TagController {
  constructor() {}
  // 接口文档示例接口
  /**
   * @api {post} /test response返回示例
   * @apiName Resonse Test
   * @apiGroup Test
   *
   * @apiSuccess {Object} code 200成功，201失败，500出错.
   * @apiSuccess {Object} message 操作提示.
   * @apiSuccess {Object} err 如果出错,则出现错误提示.
   */
  /**
   * @api {post} /tag 新增分类
   * @apiName Create new tag
   * @apiGroup Tag
   *
   * @apiParam {String} name 标签名字.
   */
  newTag() {
    return async (ctx, next) => {
      let Tag = new TagModel()
      let result = await Tag.newTag(ctx.request.body)
      ctx.body = result;
    }
  }
  /**
   * @api {put} /tag 修改分类
   * @apiName Put Tag
   * @apiGroup Tag
   *
   * @apiParam {String} id 标签id.
   */
  putTag() {
    return async (ctx, next) => {
      let Tag = new TagModel()
      let result = await Tag.putTag(ctx.request.body)
      ctx.body = result;
    }
  }
  /**
   * @api {del} /tag 删除分类
   * @apiName Delete tag
   * @apiGroup Tag
   *
   * @apiParam {String} id 标签id.
   */
  delTag() {
    return async (ctx, next) => {
      let Tag = new TagModel()
      let result = await Tag.delTag(ctx.request.body)
      ctx.body = result;
    }
  }
  /**
   * @api {post} /tag/list 获取标签列表
   * @apiName Cet tag list
   * @apiGroup Tag
   *
   * @apiParam {String} id tagId.
   *
   * @apiSuccess {Object} code 200.
   * @apiSuccess {Object} data [{_id:'',name:'';createTime:''}].
   */
  tagList() {
    return async (ctx, next) => {
      let Tag = new TagModel()
      let result = await Tag.tagList(ctx.request.body)
      ctx.body = result;
    }
  }
}
module.exports = TagController;