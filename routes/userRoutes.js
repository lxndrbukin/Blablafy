const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/api/current_user', async (req, res) => {
    await res.send(req.user);
  });

  app.get('/api/users', async (req, res) => {
    await User.find({}, (err, users) => {
      res.send(users);
    }).clone();
  });
};
