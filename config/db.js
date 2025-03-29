const mongoose = require('mongoose');

require('dotenv').config();

const connectdatabase = async () => {

    // mongoose.connect(process.env.MY_URL)
    mongoose.connect('mongodb+srv://sparshkashyap655:1234@my-cluster.u0brbyk.mongodb.net/?retryWrites=true&w=majority&appName=my-cluster')
    .then((user)=>console.log("Mongodb connected...."))
    .catch((err)=>console.log("Error occur :",err));
    

}



module.exports = connectdatabase;