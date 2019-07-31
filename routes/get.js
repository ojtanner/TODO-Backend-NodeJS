const getRouter = require('express').Router();

getRouter.get('/', (req, res) => {
    res.send('All your todos');
});

module.exports = getRouter;