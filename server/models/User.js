const mongoose = require('mongoose');
// const thoughtSchema = require('./Thought');


const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    story: {
        type: Array,
        ref: 'story'

    },
    friends: {
        type: Array,
        ref: 'User'

    }


},{
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
});

userSchema.virtual('friend count').get(function () {
      return this.friends.length;
  })

const User = mongoose.model('User', userSchema);


module.exports = User;