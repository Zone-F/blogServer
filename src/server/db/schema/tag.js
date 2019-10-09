const mongoose = require("mongoose")

let schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type:String,
    required: true
  },
  createTime: {
    type: Date,
    default: Date.now
  }
});

let Tag = mongoose.model('Tag', schema);

module.exports = Tag;