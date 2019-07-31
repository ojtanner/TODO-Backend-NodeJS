const getRouter = require('express').Router();
const todos = require('../model/index');

getRouter.get('/', (req, res) => {
    res.send(todos.getAll());
});

module.exports = getRouter;