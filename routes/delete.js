const deleteRouter = require('express').Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { Todo } = require('../model/database/mongoose');
const verifyAuthentification = require('../middleware/verifyAuthentication');

deleteRouter.delete('/', verifyAuthentification, async (req, resp) => {
    try {
        const deletedTodo = await Todo.findOneAndDelete({owner: new ObjectId(req.token.id), _id: new ObjectId(req.body.id)});

        if(!deletedTodo) return resp.status(400).send('Invalid delete id');

        return resp.status(200).send(deletedTodo);
    } catch (error) {
        return resp.status(500).send('Internal error');
    }
});

module.exports = deleteRouter;