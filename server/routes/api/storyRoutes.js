const router = require('express').Router();
const {
    getAllStories,
    getSingleStory,
    postStory,
    deleteStory,
} = require('../../controllers/storyController');

// /api/stories/
router.route('/').get(getAllStories).post(postStory)

// /api/stories/:storyId
router.route('/:storyId').get(getSingleStory).delete(deleteStory);

module.exports = router;