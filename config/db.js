const mongoose = require('mongoose');

const connectdatabase = async () => {

    mongoose.connect(process.env.MONGODB || 'mongodb://127.0.0.1:27017/short-url')
    .then((user)=>console.log("Mongodb connected...."))
    .catch((err)=>console.log("Error occur :",err));
    

}



module.exports = connectdatabase;