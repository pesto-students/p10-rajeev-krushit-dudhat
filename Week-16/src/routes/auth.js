
const exporess = require('express');
const router = exporess.Router();

const authController = require('../controllers/v1/users/auth');
// import validator

// import middleware if any

router.post('/signup', authController.signup);

module.exports = router;
