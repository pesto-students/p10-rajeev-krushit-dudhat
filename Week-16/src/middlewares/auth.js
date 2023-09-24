const { verify } = require('jsonwebtoken');

// helpers
const { successResponse, errorResponse } = require('../utils/response');
const { successMessages, errorMessages } = require('../utils/messages');
// models
const UserModel = require('../models/users');


async function authentication(req, res, next) {
  try {
    const authToken = req.cookies;

    if (!authToken) {
      return errorResponse(req, res, null, errorMessages.UNAUTHENTICATED, 401);
    }

    let payload = await verify(authToken, process.env.JWT_SECRET);

    let userExists = await UserModel.findOne({ _id: payload.id });
    if (!userExists) {
      return errorResponse(req, res, null, errorMessages.UNAUTHENTICATED, 401);
    }

    req.user = payload;
    return next();
  } catch (error) {
    return errorResponse(req, res, { error: error.message });
  }
}

exports.authentication =  authentication;
