const mongoose = require('mongoose');
const User = require('./user.model');
const Todo = require('./todo.model');

mongoose.connect(process.env.MONGODB_URL,
    { useNewUrlParser: true, useCreateIndex: true },
    () => console.log('connected'));

module.exports.User = User;
module.exports.Todo = Todo;