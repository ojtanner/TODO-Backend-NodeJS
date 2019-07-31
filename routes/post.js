const postRouter = require('express').Router();

postRouter.post('/', (req, resp) => {
    resp.send('Your newly created todo');
});

module.exports = postRouter;