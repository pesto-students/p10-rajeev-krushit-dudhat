
const exporess = require('express');
const router = exporess.Router();

const userController = require('../controllers/v1/users/users');
// import validator

// import middleware if any
const { authentication } = require('../middlewares/auth');

// router.put('/', userController.updateUser);

module.exports = router;
