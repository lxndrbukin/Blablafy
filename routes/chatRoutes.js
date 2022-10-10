const mongoose = require('mongoose');
const UserChats = mongoose.model('userChats');

module.exports = (app) => {
  app.put('/api/chats', async (req, res) => {
    const chatsList = await UserChats.findOne({
      userId: req.body.currentUser.userId,
    }).clone();
    const chats = chatsList.chats.filter(
      (chat) => chat.user.userId === req.body.user.userId
    );
    if (chats.length === 0) {
      const newChat = await UserChats.findOneAndUpdate(
        { userId: req.body.currentUser.userId },
        {
          $push: {
            chats: {
              currentUser: req.body.currentUser,
              user: req.body.user,
              messages: [],
            },
          },
        }
      ).clone();
      newChat.save();
    } else {
      return;
    }
  });

  app.get('/api/chats', async (req, res) => {
    await UserChats.find({}, (err, chats) => {
      res.send(chats);
    }).clone();
  });

  app.get('/api/chats/:id', async (req, res) => {
    console.log(req.params);
    await UserChats.findOne({ userId: req.params.id }, (err, chats) => {
      res.send(chats.chats);
    }).clone();
  });
};
