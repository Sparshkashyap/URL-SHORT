const mongoose = require('mongoose');

require('dotenv').config();

const connectdatabase = async () => {

    // mongoose.connect('mongodb://127.0.0.1:27017/short-url')
    mongoose.connect('mongodb+srv://sparshkashyap655:FTE2Qcap4jOKLHEu@my-cluster.u0brbyk.mongodb.net/')
    .then((user)=>console.log("Mongodb connected...."))
    .catch((err)=>console.log("Error occur :",err));
    

}



module.exports = connectdatabase;