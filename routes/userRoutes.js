const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/api/current_user', async (req, res) => {
    await res.send(req.user);
  });

  app.put('/api/current_user', async (req, res) => {
    if (req.body.request === '$push') {
      const user = await User.findOneAndUpdate(
        { _id: req.body._id },
        { [req.body.request]: { sentRequests: req.body.user } },
        { new: true, safe: true, upsert: true }
      ).clone();
      user.save();
      res.send(user);
    } else if (req.body.request === '$pull') {
      const user = await User.findOneAndUpdate(
        { _id: req.body._id },
        { [req.body.request]: { sentRequests: req.body.user } },
        { new: true, safe: true, upsert: true }
      ).clone();
      user.save();
      res.send(user);
    }
  });

  // app.post('/api/current_user', async (req, res) => {
  //   await User.findOneAndUpdate(
  //     { _id: req.body._id },
  //     { $pull: { sentRequests: req.body.user } },
  //     { new: true, safe: true, upsert: true }
  //   ).clone();
  // });

  app.get('/api/users', async (req, res) => {
    await User.find({}, (err, users) => {
      res.send(users);
    }).clone();
  });

  app.put('/api/users', async (req, res) => {
    if (req.body.request === '$push') {
      const user = await User.findOneAndUpdate(
        { userId: req.body.userId },
        { [req.body.request]: { friendRequests: req.body.currentUser } }
      ).clone();
      user.save();
      await User.find({}, (err, users) => {
        res.send(users);
      }).clone();
    } else if (req.body.request === '$pull') {
      const user = await User.findOneAndUpdate(
        { userId: req.body.userId },
        { [req.body.request]: { friendRequests: req.body.currentUser } }
      ).clone();
      user.save();
      await User.find({}, (err, users) => {
        res.send(users);
      }).clone();
    }
  });

  // app.post('/api/users', async (req, res) => {
  //   const user = await User.findOneAndUpdate(
  //     { userId: req.body.userId },
  //     { $pull: { friendRequests: req.body.currentUser } }
  //   ).clone();
  //   user.save();
  //   await User.find({}, (err, users) => {
  //     res.send(users);
  //   }).clone();
  // });

  app.post('/api/users/:id', async (req, res) => {
    await User.findOneAndRemove({ userId: req.body.userId }).clone();
    await User.find({}, (err, users) => {
      res.send(users);
    }).clone();
  });
};
