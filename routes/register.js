const registerRouter = require('express').Router();
const { User } = require('../model/database/mongoose');

registerRouter.post('/', async (req, resp) => {
    const user = new User(req.body);
    try {
        await user.save();
        resp.status(200).send(user);
    } catch (error) {
        resp.status(401).send(error);
    }
});

module.exports = registerRouter;