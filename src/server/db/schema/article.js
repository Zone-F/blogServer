const mongoose = require("mongoose")

let schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type:String,
    required: true
  },
  body: {
    type:String,
    required: true
  },
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