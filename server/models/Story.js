const { Schema, model } = require('mongoose');

const storySchema = new Schema({
    storyname: {
        type: String,
        unique: true,
    },
    username: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }],

    snippets: [{
        type: Schema.Types.ObjectId,
        ref: 'Snippet'
    }]

    
}, {
    toJSON: {
        getters: true,
    },
    id: false
});

storySchema.virtual('snippetCount').get(function () {
    return this.snippets.length;
});


const Story = model('story', storySchema);

module.exports = Story;
