const mongoose = require('mongoose');
const passport = require('passport');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    userId: Number,
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    avatar: String,
    chats: [Object],
    friends: [Object],
    friendRequests: [Object],
    sentRequests: [Object],
  },
  { versionKey: false }
);

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('users', userSchema);

passport.use(User.createStrategy());
