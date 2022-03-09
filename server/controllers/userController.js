const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('posts')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Application.deleteMany({ _id: { $in: user.applications } })
      )
      .then(() => res.json({ message: 'User and associated apps deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  updateUser({params, body}, res) {
    User.findOneAndUpdate({
            _id: params.id
        }, body, {
            new: true,
            runValidators: true
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({
                    message: 'No user found with this id.'
                });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
  },
  getAllUsers(req, res) {
    User.find({})
        .populate({
            path: 'thoughts',
            //allows to remove __v from visuals
            select: ('-__v')
        })
        .populate({
            path: 'friends',
            select: ('-__v')
        })
        .select('-__v')
        // sort by descending order by the _id value
        .sort({
            _id: -1
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  },
  addToFriendList({
    params
}, res) {
    User.findOneAndUpdate({
            _id: params.userId
        }, {
            $push: {
                friends: params.friendId
            }
        }, {
            new: true
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({
                    message: 'No user found with this id!'
                });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        });
},

//delete friend
removefromFriendList({
    params
}, res) {
    User.findOneAndDelete({
            _id: params.storyId
        })
        .then(deletedFriend => {
            if (!deletedFriend) {
                return res.status(404).json({
                    message: 'No friend found with this id.'
                })
            }
            return User.findOneAndUpdate({
                friends: params.friendId
            }, {
                $pull: {
                    friends: params.friendId
                }
            }, {
                new: true
            });
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({
                    message: 'No friend found with this id.'
                })
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
},
};
