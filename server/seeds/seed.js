const db = require('../config/connection');
const { Story } = require('../models');

const storyData = require('./storyData.json');

db.once('open', async () => {
  await Story.deleteMany({});

  const stories = await Story.insertMany(storyData);

  console.log('Stories seeded!');
  process.exit(0);
});
