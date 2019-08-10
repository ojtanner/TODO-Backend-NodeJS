const getRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const ObjectId = require('mongoose').Types.ObjectId;
const { Todo } = require('../model/database/mongoose');

getRouter.get('/', async (req, res) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) res.send(400).send('No auth header');
    const [authType, authToken] = authHeader.split(" ");
    if(!authType || authType !== 'Bearer' || !authToken) return res.status(400).send('Invalid auth header');
    const decodedToken = jwt.verify(authToken, process.env.SECRET_OR_KEY);
    
    try {
        const todos = await Todo.find({ owner: new ObjectId(decodedToken.id) });
        return res.status(200).send(todos);
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = getRouter;