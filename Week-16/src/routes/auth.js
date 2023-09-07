
const exporess = require('express');
const router = exporess.Router();

const authController = require('../controllers/v1/users/auth');
// import validator

// import middleware if any
const { authentication } = require('../middlewares/auth');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authentication, authController.logout);

module.exports = router;
