const mongoose = require("mongoose")

let schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  createTime: {
    type: Date,
    default: Date.now
  }
});
let tag = mongoose.model('tag', schema);
module.exports = tag;