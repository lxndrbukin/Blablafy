const mongoose = require('mongoose');
const { Schema } = mongoose;

const userChatsSchema = new Schema(
  {
    userId: Number,
    fullName: String,
    chats: [Object],
  },
  { versionKey: false }
);

mongoose.model('userChats', userChatsSchema);
