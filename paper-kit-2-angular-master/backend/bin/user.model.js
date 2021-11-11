const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  gotra: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: false,
  },
  education: {
    type: String,
    required: false,
  },
  work: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    default: 0,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;