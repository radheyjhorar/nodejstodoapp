const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
})

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;