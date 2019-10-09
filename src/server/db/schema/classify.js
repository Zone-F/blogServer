const mongoose = require("mongoose")

let schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  aid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
    required: true
  }, //文章id
  tid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag',
    required: true
  } //标签id
});
let classify = mongoose.model('classify', schema);
module.exports = classify;