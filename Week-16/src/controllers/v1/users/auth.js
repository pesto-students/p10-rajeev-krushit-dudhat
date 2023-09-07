const crypto = require('crypto');
const { sign } = require('jsonwebtoken');

// helpers
const { successResponse, errorResponse } = require('../../../utils/response');
const { successMessages, errorMessages } = require('../../../utils/messages');
// models
const UserModel = require('../../../models/users');


async function signup(req, res) {
  try {
    const { email, password, name, age, phone } = req.body;

    try {
      const userExists = await UserModel.findOne({ email });
      if (userExists) {
        return errorResponse(req, res, { email, name }, errorMessages.USER_ALREADE_EXISTS, 400);
      }
    } catch (error) {
      throw new Error('Database error', JSON.stringify(error));
    }
    
    let encryptedPassword = await crypto.createHash('md5').update(password).digest('hex');
    console.log(encryptedPassword);

    await UserModel.create({
      name,
      email,
      password: encryptedPassword,
      age,
      phone,
    });

    return successResponse(req, res, { email, name }, successMessages.USER_CREATED, 201);

  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    let encryptedPassword = crypto.createHash('md5').update(password).digest('hex');

    const user = await UserModel.findOne({ email, password: encryptedPassword });
    if (!user) {
      return errorResponse(req, res, { email, password }, errorMessages.INVALID_CREDS, 400);
    }

    const token = sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRTY });

    // set token in cookies. with httpOnly setting.
    res.cookie('authToken', token, { maxAge: process.env.JWT_Expiry, httpOnly: true, sameSite: 'strict', secure: true });

    return successResponse(req, res, { authToken: token }, successMessages.USER_LOGGED_IN, 200);

  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

async function logout(req, res) {
  try {
    res.clearCookie('authToken');
    return successResponse(req, res, {}, successMessages.USER_LOGGED_OUT, 200);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}


exports.signup = signup;
exports.login = login;
exports.logout = logout;
