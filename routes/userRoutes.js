const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/api/current_user', async (req, res) => {
    await res.send(req.user);
  });

  app.put('/api/current_user', async (req, res) => {
    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      {
        $push: { sentRequests: req.body.user },
      },
      { new: true, safe: true, upsert: true }
    ).clone();
    console.log(user);
    user.save();
    res.send(user);
  });

  app.get('/api/users', async (req, res) => {
    await User.find({}, (err, users) => {
      res.send(users);
    }).clone();
  });

  app.put('/api/users', async (req, res) => {
    const user = await User.findOneAndUpdate(
      { userId: req.body.userId },
      { $push: { friendRequests: req.body.currentUser } }
    ).clone();
    console.log(user);
    user.save();
    res.send(user);
  });
};
