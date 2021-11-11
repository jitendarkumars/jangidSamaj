var express = require('express');
var router = express.Router();

const userModel = require("../bin/user.model");
const headUserModel = require("../bin/head.user.model")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
  const users = await headUserModel.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = router;
