const {
    Snippet,
    User
} = require('../models');
const SnippetController = {

    //get all Snippet
    getAllSnippets(req, res) {
        Snippet.find({})
            .then(dbSnippetData => res.json(dbSnippetData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //get one Snippet by id
    getSnippetById({
        params
    }, res) {
        Snippet.findOne({
                _id: params.id
            })
            .select('-__v')
            .sort({
                _id: -1
            })
            .then(dbSnippetData => {
                if (!dbSnippetData) {
                    res.status(404).json({
                        message: 'No snippet found with id.'
                    });
                    return;
                }
                res.json(dbSnippetData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //create Snippet
    addSnippet({
        body
    }, res) {
        Snippet.create(body)
            .then((SnippetData) => {
                return User.findOneAndUpdate(
                    //create a Snippet using current user
                    {
                        username: body.username
                    }, {
                        $addToSet: {
                            Snippets: SnippetData.username
                        }
                    }, {
                        new: true
                    }
                );
            })
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({
                        message: 'No user found'
                    });
                    return;
                }
                res.json(dbUsersData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //create reactions
//     addReaction({
//         params,
//         body
//     }, res) {
//         Snippet.findOneAndUpdate({
//                 _id: params.SnippetId
//             }, {
//                 $push: {
//                     reactions: body
//                 }
//             }, {
//                 new: true,
//                 runValidators: true
//             })
//             .then(updatedSnippet => {
//                 if (!updatedSnippet) {
//                     res.status(404).json({
//                         message: 'No reaction found with this id!'
//                     });
//                     return;
//                 }
//                 res.json(updatedSnippet);
//             })
//             .catch(err => res.json(err));
//     },
//     // Delete a reaction
//     removeReaction({
//         params
//     }, res) {
//         Snippet.findOneAndUpdate({
//                     _id: params.SnippetId
//                 },
//                 //allows to remove the reaction by id
//                 {
//                     $pull: {
//                         Snippets: {
//                             SnippetId: params.SnippetId
//                         }
//                     }
//                 }, {
//                     new: true
//                 }
//             )
//             .then((Snippet) => {
//                 if (!Snippet) {
//                     res.status(404).json({
//                         message: 'No reaction found with this id.'
//                     });
//                     return;
//                 }
//                 res.json(Snippet)
//             })
//             .catch(err => res.json(err));
//     },
}

module.exports = SnippetController;