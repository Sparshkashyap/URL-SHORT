
const express = require('express');

const router = express.Router();

const {ShortURL,redirecturl,Analytics,Render} = require('../controllers/userControllers');
const { RestrictUserOnlyTO } = require('../middleware/userMiddleware');



    router.post('/',ShortURL);
    router.get('/:sid',redirecturl);
    router.get('/visit/:sid',Analytics);
    router.get('/admin/url',RestrictUserOnlyTO(["ADMIN"]),Render);
    router.get('/', RestrictUserOnlyTO(["NORMAL","ADMIN"]),Render); // Staticlogin (homepage)

module.exports = router;