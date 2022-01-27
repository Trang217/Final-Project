const { Schema, model } = require("mongoose");
const validator = require("validator");

const badgeSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: Date.now,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please tell us your first name!"],
  },
  userName: {
    type: String,
    required: [true, "Please provide a username!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email address!"],
    unique: true,
    validate: [validator.isEmail, " Please provide a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
  },
  badges: {
    type: [badgeSchema],
  },
});

const User = model("User", userSchema);

module.exports = User;
