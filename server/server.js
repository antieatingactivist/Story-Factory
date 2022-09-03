const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();
const app = express();
const https = require('https');
const fs = require('fs');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  // app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
  https.createServer({
    key: fs.readFileSync(process.env.KEY_PEM),
    cert: fs.readFileSync(process.env.CERT_PEM),
  },app)
    .listen(PORT, ()=>{
      console.log(`App listening on PORT ${PORT}`);
      console.log(process.env);
    });
});
