const { Story } = require('../models');

const StoryController = {
    getAllStories(req, res) {
            Story.find({})
            .populate({ path: 'Snippet',
                        select: ('-__v')
        })
        .select('-__v')
        .then(data => res.json(data))
        .catch(err => {
        res.status(500).json(err);   
        });
    },

    getSingleStory({ params }, res) {
            Story.findOne({
                _id: params.id
            })
            .populate({ path: 'Snippet',
                        select: ('-__v')
        })
        .select('-__v')
        .then(data => res.json(data))
        .catch(err => {
        res.status(500).json(err);   
        });
    },

    postStory(req, res) {
            Story.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
      },

}


module.exports = StoryController;