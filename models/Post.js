const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
