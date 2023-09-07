const crypto = require('crypto');

// helpers
const { successResponse, errorResponse } = require('../../../utils/response');
const { successMessages, errorMessages } = require('../../../utils/messages');
// models
const UserModel = require('../../../models/users');


// login
// logout
// signup

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

exports.signup = signup;
