const router = require('express').Router();
const userRoutes = require('./userRoutes');
const snippetRoutes = require('./snippetRoutes');


router.use('/users', userRoutes);
router.use('/snippets', snippetRoutes);



module.exports = router;
