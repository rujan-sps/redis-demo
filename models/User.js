const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    PassengerId: {
      type: Number,
    },
    Survived: {
      type: Number,
    },
    Pclass: {
      type: Number,
    },
    Age: {
      type: Number,
    },
    SibSp: {
      type: Number,
    },
    Parch: {
      type: Number,
    },
    Fare: {
      type: Number,
    },
    Name: {
      type: String,
    },
    Sex: {
      type: String,
    },
    Ticket: {
      type: String,
    },
    Cabin: {
      type: String,
    },
    Embarked: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
