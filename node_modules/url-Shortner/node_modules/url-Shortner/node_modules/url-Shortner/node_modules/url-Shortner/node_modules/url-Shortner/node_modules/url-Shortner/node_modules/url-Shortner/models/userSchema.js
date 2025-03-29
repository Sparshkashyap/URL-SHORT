const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    originalURL :{
        type:String,
        required:true,
        unique:true,
    },
    shortidURL:{
        type:String,
        required:true,
        unique:true
    },
    visithistory:[{
        timeStamp:{

            type: Number,
            default:Date.now
        }
    }],

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }

},{timestamps:true});

const URL = mongoose.model('url',UserSchema);

module.exports = URL
