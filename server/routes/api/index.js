const router = require('express').Router();
const userRoutes = require('./userRoutes');
const storyRoutes = require('./storyRoutes');
const snippetRoutes = require('./snippetRoutes');

router.use('/snippets', snippetRoutes);
router.use('/users', userRoutes);
router.use('/stories', storyRoutes);


module.exports = router;
