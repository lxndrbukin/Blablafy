const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/api/current_user', async (req, res) => {
    if (req.user) {
      await User.findOne({ userId: req.user.userId }, (err, user) => {
        res.send(user);
      })
        .select('-_id')
        .clone();
    }
  });

  app.put('/api/current_user', async (req, res) => {
    if (req.body.request === '$push' && req.body.friend === false) {
      const user = await User.findOneAndUpdate(
        { userId: req.body.userId },
        { [req.body.request]: { sentRequests: req.body.user } }
      ).clone();
      user.save();
    } else if (req.body.request === '$push' && req.body.friend === true) {
      const user = await User.findOneAndUpdate(
        { userId: req.body.userId },
        { [req.body.request]: { friends: req.body.user } }
      ).clone();
      user.save();
    } else if (req.body.request === '$pull') {
      const user = await User.findOneAndUpdate(
        { userId: req.body.userId },
        { [req.body.request]: { friendRequests: req.body.user } }
      ).clone();
      user.save();
    }
    await User.findOne({ userId: req.body.userId }, (err, user) => {
      res.send(user);
    }).clone();
  });

  app.get('/api/users', async (req, res) => {
    await User.find({}, (err, users) => {
      res.send(users);
    })
      .select('-_id')
      .clone();
  });

  app.get('/api/users/:search', async (req, res) => {
    if (req.params === {}) {
      res.send([]);
    } else {
      if (req.params.search.includes(' ')) {
        const name = req.params.search.split(' ');
        const users = await User.find({
          firstName: { $regex: name[0] },
          lastName: { $regex: name[1] },
        }).clone();
        res.send(users);
      } else {
        let users = await User.find({
          firstName: { $regex: req.params.search },
        }).clone();
        if (users.length === 0) {
          users = await User.find({
            lastName: { $regex: req.params.search },
          }).clone();
        }
        res.send(users);
      }
    }
  });

  app.put('/api/users', async (req, res) => {
    if (req.body.request === '$push' && req.body.friend === false) {
      const user = await User.findOneAndUpdate(
        { userId: req.body.userId },
        { [req.body.request]: { friendRequests: req.body.currentUser } }
      ).clone();
      user.save();
      await User.find({}, (err, users) => {
        res.send(users);
      }).clone();
    } else if (req.body.request === '$push' && req.body.friend === true) {
      const user = await User.findOneAndUpdate(
        { userId: req.body.userId },
        { [req.body.request]: { friends: req.body.currentUser } }
      ).clone();
      user.save();
      await User.find({}, (err, users) => {
        res.send(users);
      }).clone();
    } else if (req.body.request === '$pull') {
      const user = await User.findOneAndUpdate(
        { userId: req.body.userId },
        { [req.body.request]: { sentRequests: req.body.currentUser } }
      ).clone();
      user.save();
      await User.find({}, (err, users) => {
        res.send(users);
      }).clone();
    }
  });

  app.post('/api/users/:id', async (req, res) => {
    await User.findOneAndRemove({ userId: req.body.userId }).clone();
    await User.find({}, (err, users) => {
      res.send(users);
    }).clone();
  });

  app.get('/api/user/:id', async (req, res) => {
    await User.findOne({ userId: req.params.id }, (err, user) => {
      res.send(user);
    }).clone();
  });
};
