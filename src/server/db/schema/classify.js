const mongoose = require("mongoose")

let schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  aid: mongoose.Schema.Types.ObjectId, //文章id
  tid: mongoose.Schema.Types.ObjectId  //标签id
});
let classify = mongoose.model('classify', schema);
module.exports = classify;