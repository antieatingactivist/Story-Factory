const { Schema, model } = require('mongoose');

const snippetSchema = new Schema({
    content: {
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
});


const Snippet = model('snippet', snippetSchema);

module.exports = Snippet;
