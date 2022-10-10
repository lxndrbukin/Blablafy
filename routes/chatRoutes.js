const mongoose = require('mongoose');
const UserChats = mongoose.model('userChats');

module.exports = (app) => {
  app.put('/api/chats', async (req, res) => {
    const chatsList = await UserChats.findOne({
      userId: req.body.currentUser.userId,
    }).clone();
    const chat = chatsList.chats.find((chat) => {
      chat.user.userId === req.body.user.userId;
    });
    if (chat) {
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
      console.log('Nope');
      return;
    }
  });

  app.get('/api/chats', async (req, res) => {
    await UserChats.find({}, (err, chats) => {
      res.send(chats);
    }).clone();
  });

  app.get('/api/chats/:userId', async (req, res) => {
    await UserChats.findOne({ userId: req.params.userId }, (err, chats) => {
      res.send(chats.chats);
    }).clone();
  });

  app.put('/api/chats/:userId', async (req, res) => {
    const chatList = await UserChats.findOne({
      // userId: req.body.userId,
      messages: [],
    }).clone();
    console.log(chatList);
    // const chat = chatList.chats.find((chat) => {
    //   if (chat.user.userId === req.body.userId) {
    //     return chat;
    //   }
    // });
    // chat.messages.$push(req.body.message);
    // chatList.save();
  });
};
