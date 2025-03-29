
const express = require('express');

const router = express.Router();

const {ShortURL,redirecturl,Analytics,Render} = require('../controllers/userControllers');
// const { RestrictUserOnlyTO } = require('../middleware/userMiddleware');
const {signpage} = require('../controllers/alluser');
const {admin} = require('../controllers/alluser')



    router.post('/',ShortURL);
    router.get('/signup',signpage);
    router.get('/:sid',redirecturl);
    router.get('/visit/:sid',Analytics);
    router.get('/admin/url',admin);
    router.get('/',Render); // Staticlogin (homepage)
 
    

module.exports = router;