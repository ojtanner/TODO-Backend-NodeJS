const patchRouter = require('express').Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { Todo } = require('../model/database/mongoose');
const verifyAuthentification = require('../middleware/verifyAuthentication');

patchRouter.patch('/', verifyAuthentification, async (req, resp) => {
    try {
        const todo = await Todo.findOneAndUpdate(
            { owner: new ObjectId(req.token.id), _id: new ObjectId(req.body.id)},
            {...req.body},
            { new: true}
            );
        return resp.status(200).send(todo);
    } catch (error) {
        console.log(error);
        return resp.status(400).send('Invalid Update');
    }
});

module.exports = patchRouter;