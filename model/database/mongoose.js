const mongoose = require('mongoose');
const User = require('./user.model');
const Todo = require('./todo.model');

mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGODB_URL,
    { useNewUrlParser: true, useCreateIndex: true },
    () => console.log('connected'));

module.exports.User = User;
module.exports.Todo = Todo;