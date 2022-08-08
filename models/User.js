const mongoose = require('mongoose');
const passport = require('passport');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  userId: String,
  fullName: String,
  email: String,
  username: String,
  avatar: String,
  chats: [],
  joinMethod: String,
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('users', userSchema);

passport.use(User.createStrategy());
