const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//console.log(db);

// Connect to Mongo - promise based
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;  

// Callback to display console message to tell us that the server started
app.listen(port, () => console.log(`Server started on port ${port}`));

// npm i express body-parser mongoose concurrently
// npm run server - nodemon
