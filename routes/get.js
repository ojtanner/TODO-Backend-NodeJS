const getRouter = require('express').Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { Todo } = require('../model/database/mongoose');
const verifyAuthentification = require('../middleware/verifyAuthentication');

getRouter.get('/', verifyAuthentification, async (req, res) => {
    try {
        const todos = await Todo.find({ owner: new ObjectId(req.token.id) });
        return res.status(200).send(todos);
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = getRouter;