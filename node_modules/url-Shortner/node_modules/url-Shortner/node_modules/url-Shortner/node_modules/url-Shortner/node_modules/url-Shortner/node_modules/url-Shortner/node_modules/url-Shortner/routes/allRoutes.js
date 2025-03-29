const express = require('express');

const router = express.Router();

const {signup,signpage,loginpage,loginnewpage} = require('../controllers/alluser');


router.post('/login',signup);
router.get('/signup',signpage);
router.get('/login',loginnewpage);
router.post('/login/home',loginpage);



module.exports = router;