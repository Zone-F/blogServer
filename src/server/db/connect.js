const mongoose = require('mongoose')

const articleModel = require('./schema/article')
const classifyModel = require('./schema/classify')
mongoose.connect('mongodb://127.0.0.1:27017/blog', {
  useNewUrlParser: true
}).then(
  () => {
    articleModel
      .find({})
      .populate('classId')
      .exec(function (err, res) {
        if (err) return handleError(err);
        console.log(res);
      });
  },
  err => {
    console.log('连接失败');
  }
);