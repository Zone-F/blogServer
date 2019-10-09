const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/blog', {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(
  () => {
    console.log('数据库连接成功');
  },
  err => {
    console.log('数据库连接失败');
  }
);