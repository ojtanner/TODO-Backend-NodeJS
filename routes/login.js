const loginRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const { Todo } = require('../mongoose/mongoose');

loginRouter.post('/', async (req, resp) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) return resp.status(400).send('Invalid email');
        const passwordIsValid = await user.validatePassword(req.body.password);
        if(!passwordIsValid) resp.status(400).send('Invalid password');
        const token = jwt.sign({ id: user._id }, process.env.SECRET_OR_KEY);
        return resp.status(200).send(token);
    } catch (error) {
        return resp.status(500).send(error);
    }
});

module.exports = loginRouter;