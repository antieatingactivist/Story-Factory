const {User} = require('../models');
const bcrypt = require('bcryptjs')
const userController = {

  //get all users
  getAllUsers(req, res) {
      User.find({})
          .populate({
              path: 'Snippet',
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

  //get one user by id
  getUserById({
      params
  }, res) {
      User.findOne({
              _id: params.id
          })
          .populate({
              path: 'Snippet',
              select: '-__v'
          })
          .select('-__v')
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
              console.log(err);
              res.sendStatus(400);
          });
  },

  //create user
  createUser({
      body
  }, res) {
      User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.status(400).json(err));
  },

  //update user by id
  updateUser({
      params,
      body
  }, res) {
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

  //delete user
  deleteUser({
      params
  }, res) {
      User.findOneAndDelete({
              _id: params.id
          })
          .then(dbUserData => {
              if (!dbUserData) {
                  res.status(404).json({
                      message: 'No user found with this id.'
                  });
                  return;
              }
              return dbUserData;
          })
          .then(dbUserData => {
              User.updateMany({
                      _id: {
                          $in: dbUserData.friends
                      }
                  }, {
                      $pull: {
                          friends: params.userId
                      }
                  })
                  .then(() => {
                      //deletes user's thought associated with id
                      Thought.deleteMany({
                              username: dbUserData.username
                          })
                          .then(() => {
                              res.json({
                                  message: 'User deleted successfully'
                              });
                          })
                          .catch(err => {
                              console.log(err);
                              res.status(400).json(err);
                          })
                  })
                  .catch(err => {
                      console.log(err);
                      res.status(400).json(err);
                  })
          })
          .catch(err => {
              console.log(err);
              res.status(400).json(err);
          })
  },

  //add friends
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
              _id: params.thoghtId
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
// var testUser = new User({
//     username: 'jmar777',
//     password: 'Password123',
//     email: 'jmar777@gmail.com'
// });
     
// // save the user to database
// testUser.save(function(err) {
//     if (err) throw err;
// });
    
// // fetch the user and test password verification
// User.findOne({ username: 'jmar777' }, function(err, user) {
//     if (err) throw err;
     
//     // test a matching password
//     user.comparePassword('Password123', function(err, isMatch) {
//         if (err) throw err;
//         console.log('Password123:', isMatch); // -&gt; Password123: true
//     });
     
//     // test a failing password
//     user.comparePassword('123Password', function(err, isMatch) {
//         if (err) throw err;
//         console.log('123Password:', isMatch); // -&gt; 123Password: false
//     });
// });

module.exports = userController;