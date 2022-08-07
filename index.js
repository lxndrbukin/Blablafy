const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./services/keys');
const session = require('express-session');

require('./models/User');
require('./services/passport');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

mongoose
  .connect(keys.mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO MONGODB'))
  .catch((error) => console.log(error));

require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);

const PORT = 5000;
app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
