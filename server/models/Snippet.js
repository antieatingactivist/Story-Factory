const { Schema, model } = require('mongoose');

const snippetSchema = new Schema(

    
);


const Snippet = model('snippet', snippetSchema);

module.exports = Snippet;
