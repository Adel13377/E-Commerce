const CustomError = require('../errors');

const checkPremissions = (requestUser, resourceUserId) => {
    if(requestUser.role === 'admin') return;
    if(requestUser.userId === resourceUserId.toString()) return;
    throw new CustomError.UnauthorizedError('Unauthorized to access this route');
    

}

module.exports = checkPremissions;