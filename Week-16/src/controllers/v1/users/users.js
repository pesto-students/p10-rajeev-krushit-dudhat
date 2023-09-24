
// delete user
// update user
const { successResponse, errorResponse } = require('../../../utils/response');
const { successMessages, errorMessages } = require('../../../utils/messages');

const UserModel = require('../../../models/users');

async function updateUser(req, res){
    try{
        const {email, password, name, age, phone} = req.body;
        try{
            const userExists = await UserModel.findOne({email});
            if(!userExists){
                return errorResponse(req, res, { email, name }, errorMessages.USER_NOT_FOUND, 400);
            }
        }catch(error){
            throw new Error('Database error', JSON.stringify(error));
        }
    }
    catch(error){
        return errorResponse(req, res, errorMessages);
    }
}