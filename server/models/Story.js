const { Schema, model } = require('mongoose');

const storySchema = new Schema(

    
);


const Story = model('story', storySchema);

module.exports = Story;
