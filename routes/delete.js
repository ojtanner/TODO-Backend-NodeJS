const deleteRouter = require('express').Router();
const todos = require('../model/index');

deleteRouter.delete('/', (req, resp) => {
    const todoId = req.body.id;

    if(!todoId) {
        resp.status(404).send({ id: -1 });
        return;
    }

    const todo = todos.remove(todoId);

    if(todo.id === -1) {
        resp.status(404).send(todo);
        return;
    }

    resp.status(200).send(todo);
});

module.exports = deleteRouter;