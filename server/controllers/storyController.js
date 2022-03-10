const { Story, Snippet } = require('../models');

module.exports = {
    getAllStories(req, res) {
        Story.find({})
        .populate('snippets')
    },
    getSingleStory(req, res) {
        Story.findOne({ _id: req.params.storyId})
        .select('-__v')
        .populate('snippets')
        .then((story) => 
            !story
                ? res.status(404).json({ message: 'No story with this ID found.'})
                : res.json(user)
        )
        .catch((err) => res.status.json(err));
            
    },

    postStory(req, res) {
        Story.create(req.body)
            .then((story) => res.json(story))
            .catch((err) => res.status(500).json(err));
    },

    deleteStory(req, res) {
        Story.findOneAndRemove({ _id: req.params.storyId})
            .then((snippet) => 
                !snippet
                ? res.status(404).json({ message: 'No story with this ID in db'})
                : Snippet.findOneAndUpdate(
                    { storyname: req.params.storyId },
                    { $pull: { storyname: req.params.storyId }},
                    {new: true }
                )
            )
            .then((story) => 
                !story
                    ? res.status(404).json({ 
                        message: 'Story deleted, no snippets to delete.',
                    })
                    : res.json({ message: 'Story and snippets successfully deleted.'})
                    )
                    .catch((err) => {
                        console.log(err);
                        res.status(500).json(err);
                    });
    },

}