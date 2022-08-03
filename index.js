const express = require('express');
const mongoose = require('mongoose');
const keys = require('./services/keys');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(keys.mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO MONGODB'))
  .catch((error) => console.log(error));

const PORT = 5000;
app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
