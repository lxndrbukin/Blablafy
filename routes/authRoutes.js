const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const UserChats = mongoose.model('userChats');

module.exports = (app) => {
  app.post('/authorize', async (req, res) => {
    await User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate('local', { failureRedirect: '/auth' })(
          req,
          res,
          () => {
            return res.send(user);
          }
        );
      }
    }).clone();
  });

  app.post('/register', async (req, res) => {
    const id = await User.countDocuments({}, (err, count) => {
      return count;
    }).clone();

    await User.register(
      {
        username: req.body.username,
        userId: id + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      },
      req.body.password,
      (err, user) => {
        if (err) {
          console.log(err);
        } else {
          passport.authenticate('local', { failureRedirect: '/auth' })(
            req,
            res,
            () => {
              console.log(`User ${user.username} registered`);
              new UserChats({
                userId: user.userId,
                fullName: `${user.firstName} ${user.lastName}`,
                chats: [],
              }).save();
              return res.send(user);
            }
          );
        }
      }
    );
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    return res.send(null);
  });
};
