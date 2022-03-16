const router = require('express').Router();

const {
    getAllStories,
    getSingleStory,
    postStory,
} = require('../../controllers/storyController');


router
    .route('/')
    .get(getAllStories)
    .post(postStory)

router
    .route('/:storyName')
    .get(getSingleStory);

module.exports = router;