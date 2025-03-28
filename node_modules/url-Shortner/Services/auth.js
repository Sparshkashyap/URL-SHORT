
const sessionIdUserMap = new Map();

const jwt = require('jsonwebtoken');
const secretKey ="sparsh@1234";

function setUser(user){

    // sessionIdUserMap.set(id,user);
    // return sessionIdUserMap;

    return jwt.sign({
       _id:user._id,
       email:user.email, 
       role:user.role
    },secretKey);

}


function getUser(token){

    if(!token){

        return null;
    }

    try{

   return jwt.verify(token,secretKey);

    }
    catch(err){

        return null;
    }
}


module.exports = {setUser,getUser};