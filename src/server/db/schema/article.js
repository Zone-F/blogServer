const mongoose = require("mongoose")

let schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  body: String,
  createTime: {
    type: Date,
    default: Date.now
  },
  updateTime:{
    type: Date,
    default: Date.now
  }
});
let Article = mongoose.model('Article', schema);
module.exports = Article;