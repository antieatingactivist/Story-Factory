const {
    Schema,
    model
} = require('mongoose');
const bcrypt = require('bcrypt');
const { min } = require('moment');
SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'User email address required'],
        unique: true,
        validate: {
            validator: function (v) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        min: 6
    },
    Snippet: [{
        type: Schema.Types.ObjectId,
        ref: 'Snippet'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

UserSchema.pre('save', function(next){
    if (!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
            return next(err);
        this.password = passwordHash;
            next();
    })
})

UserSchema.methods.comparePassword = function(password,cb){
        bcrypt.compare(password,this.password,(err,isMatch)=>{
            if(err)
                return cb (err);
            else {
                if(!isMatch)
                    return cb(null, isMatch)
                return cb(null,this);
            }
        })
}


const User = model('User', UserSchema);

module.exports = User;