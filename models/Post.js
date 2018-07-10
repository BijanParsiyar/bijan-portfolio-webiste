const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  text: {
    type: String,
    required: true
  },

  by: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  img1: {
    type: String,
    required: false
  },

  img2: {
    type: String,
    required: false
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
