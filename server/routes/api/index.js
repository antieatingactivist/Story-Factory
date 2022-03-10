const router = require('express').Router();
const userRoutes = require('./userRoutes');
const snippetRoutes = require('./snippetRoutes');

router.use('/snippets', snippetRoutes)
router.use('/users', userRoutes);


module.exports = router;
