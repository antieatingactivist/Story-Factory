const router = require('express').Router();
const userRoutes = require('./userRoutes');
const snippetRoutes = require('./snippetRoutes');
const storyRoutes = require('./storyRoutes');


router.use('/users', userRoutes);
router.use('/snippets', snippetRoutes);
router.use('/stories', storyRoutes);



module.exports = router;
