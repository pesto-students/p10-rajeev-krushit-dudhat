const { errorMessages, successMessages } = require('./messages');


exports.successResponse = (req, res, data, message, code = 200) => {
  res.status(code);
  res.send({
    success: true,
    message,
    data
  });
}

exports.errorResponse = (req, res, data = null, message = errorMessages.SOMETHING_WENT_WRONG, code = 500) => {
  res.status(code);
  res.send({
    success: false,
    message,
    data
  });
};
