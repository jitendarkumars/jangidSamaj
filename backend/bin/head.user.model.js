const mongoose = require("mongoose");
const User = require('./user.model')
const HeadUserSchema = new mongoose.Schema({
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
  },
  isHeadOfFamily: {
    type: Boolean,
    default: true
  },
  membersOfFamily:[]

});

const HeadUser = mongoose.model("HeadUser", HeadUserSchema);

module.exports = HeadUser;