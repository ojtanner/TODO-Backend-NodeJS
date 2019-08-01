const patchRouter = require('express').Router();
const todos = require('../model/index');

patchRouter.patch('/', (req, resp) => {
    const todoId = req.body.id;

    if(!todoId) {
        resp.status(404).send({ id: -1 });
        return;
    }

    const updatedTodoProperties = req.body.update;

    if(!updatedTodoProperties) {
        resp.status(404).send({ id: -1 });
        return;
    }

    const updatedTodo = todos.update(todoId, updatedTodoProperties);
    resp.status(200).send(updatedTodo);
});

module.exports = patchRouter;