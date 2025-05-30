
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        unique:true,
        required:true

    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true

    },
    role:{
        type:String,
        require:true,
        default:"NORMAL"
    }

},{timestamps:true});

const user = mongoose.model('user',UserSchema);

module.exports = user;