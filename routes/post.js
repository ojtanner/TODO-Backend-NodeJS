const postRouter = require('express').Router()
const jwt = require('jsonwebtoken');
const ObjectId = require('mongoose').Types.ObjectId;
const { Todo } = require('../model/database/mongoose');

postRouter.post('/', async (req, res) => {

    //Refactor as middleware
    const authHeader = req.headers.authorization;
    if(!authHeader) res.send(400).send('No auth header');
    const [authType, authToken] = authHeader.split(" ");
    if(!authType || authType !== 'Bearer' || !authToken) return res.status(400).send('Invalid auth header');
    const decodedToken = jwt.verify(authToken, process.env.SECRET_OR_KEY);

    const todo = new Todo({
        owner: new ObjectId(decodedToken.id), 
        title: req.body.title,
        description: req.body.description
    });

    try {
        await todo.save();
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = postRouter;