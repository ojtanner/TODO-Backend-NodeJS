const postRouter = require('express').Router();
const Todo = require('../model/Todo');
const todos = require('../model/index');

postRouter.post('/', (req, resp) => {
    try {
        const newTodo = new Todo(
            req.body.title,
            req.body.description,
            req.body.deadline);
        todos.add(newTodo);
        resp.send(newTodo);
    } catch (error) {
        resp.send(error);
    }
});

module.exports = postRouter;