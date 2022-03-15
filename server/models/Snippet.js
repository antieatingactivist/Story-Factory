const { Schema, model } = require('mongoose');

const SnippetSchema = new Schema({
    snippetText: {
        type: String,
        required: true,

    },

    username: {
        type: String,
        ref: 'User',
        required: true,

    },
    
    story: {
        type: Schema.Types.ObjectId,
        ref: 'Story',

    },
    // reactions: [reactionSchema]
});


const Snippet = model('Snippet', SnippetSchema);

module.exports = Snippet;
