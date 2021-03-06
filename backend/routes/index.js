var express = require('express');
var router = express.Router();

const userModel = require("../bin/user.model");
const headUserModel = require("../bin/head.user.model")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html',{root:__dirname})
});
router.get('*', function(req, res, next) {
  res.sendFile('index.html',{root:__dirname})
});


router.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.post("/add_user", async (request, response) => {
  const user = new userModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});


router.post("/add_head_user", async (request, response) => {
  const user = new headUserModel(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/head_user", async (request, response) => {
  let users = await headUserModel.find({});
  try {
  users = users.map(user =>
    {

      user.membersOfFamily.push({
      name: 'jitendar',
      fatherName: 'Shravan Kumar',
      gotra: 'Vanecha',
      village: 'Mandli',
      mobileNumber: '9680379063',
      education: 'B.tech',
      work: 'Software Engineer',
      age: 26,
      isHeadOfFamily: false})
      return user;
    } 
    )
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = router;
