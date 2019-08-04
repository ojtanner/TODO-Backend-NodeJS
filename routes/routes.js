const router = require('express').Router();

router.use('/get', require('./get'));
router.use('/post', require('./post'));
router.use('/patch', require('./patch'));
router.use('/delete', require('./delete'));
router.use('/register', require('./register'));

module.exports = router;