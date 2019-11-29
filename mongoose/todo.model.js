const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const validatorjs = require("validator");

const todoSchema = new mongoose.Schema({
  owner: {
    type: ObjectId,
    required: true
  },
  title: {
    type: String,
    default: "NewTask"
  },
  description: {
    type: String,
    required: false
  },
  completed: {
    type: Boolean,
    required: false,
    default: false
  },
  deadline: {
    type: Date,
    required: false
  },
  creationDate: {
    type: Date,
    default: Date.now,
    required: false
  }
});

module.exports = mongoose.model("Todo", todoSchema);
