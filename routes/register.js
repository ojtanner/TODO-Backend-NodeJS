const registerRouter = require('express').Router();
const { User } = require('../model/database/mongoose');

registerRouter.post('/', async (req, resp) => {

    try {
        const emailInUse = await User.findOne({ email: req.body.email });
        if(emailInUse) return resp.status(401).send('Email in use');
    } catch (error) {
        return resp.status(400).send(error);
    }

    const user = new User(req.body);

    try {
        await user.save();
        return resp.status(200).send(user);
    } catch (error) {
        return resp.status(401).send(error);
    }
});

module.exports = registerRouter;