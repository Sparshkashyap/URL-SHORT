const mongoose = require('mongoose');

const user = require('../models/user');

const URL = require('../models/userSchema');

const {v4:uuidv4} = require('uuid');

const {setUser} = require('../Services/auth');

const signup = async (req,res)=>{

    try{

    const {name,email,password} = req.body;    
    const newUser = await user.create({
        name,
        email,
        password
    })

    // console.log(newUser);
    if(!newUser){
        return res.status(404).json({status:"pending",message:"newUser not created"});
    }

    res.render('login');
    }
    catch(err){
        console.log("Error for duplicate vate");
        return res.status(404).json({status:"pending",message:"duplicate value is take"});
        
    }
};


const signpage = (req,res)=>{

    res.render('signup');

}


const loginpage = async (req,res) =>{

    const {email,password } = req.body;
    const isUser = await user.findOne({email,password});

    // const sessionid = uuidv4();

    const token = setUser(isUser);

    res.cookie("token",token);

    if(!isUser){
        // return res.status(404).json({status:"pending",message:"User not exist"});
        return res.redirect('/user/login');
    }

    const alldata = await URL.find({});

    // send the data using token 
    // res.json({token});

    res.render('home',{
        urls:alldata
    })

}


const loginnewpage = (req,res) =>{

    res.render('login');
}


const admin = async (req,res)=>{

    const allurls = await URL.find({});

    return res.render('home',{
        urls:allurls
    })
}


module.exports = {signup,signpage,loginpage,loginnewpage,admin}

