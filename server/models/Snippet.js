const { Schema, model } = require('mongoose');

const SnippetSchema = new Schema({
    snippetText: {
        type: String,
        required: true,

    },

    username: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    },
    
    storyname: {
        type: Schema.Types.ObjectId,
        ref: 'Story',
        required: true,

    },
    // reactions: [reactionSchema]
});


const Snippet = model('Snippet', SnippetSchema);

module.exports = Snippet;
