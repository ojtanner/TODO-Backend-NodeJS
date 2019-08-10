const loginRouter = require('express').Router();
const { User } = require('../model/database/mongoose');

loginRouter.post('/', async (req, resp) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) return resp.status(400).send('Invalid email');
        const passwordIsValid = await user.validatePassword(req.body.password);
        if(!passwordIsValid) resp.status(400).send('Invalid password');
        return resp.status(200).send('Login successful');
    } catch (error) {
        return resp.status(500).send(error);
    }
});

module.exports = loginRouter;