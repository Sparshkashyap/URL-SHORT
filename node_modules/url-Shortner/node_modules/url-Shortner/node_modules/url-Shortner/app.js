
const express = require('express');

const connectdatabase = require('./config/db');

const app = express();

const path =require('path');

const cookieParser = require('cookie-parser');

const port = 8006;

const urlroutes = require('./routes/userRoutes');

const userRoutes = require('./routes/allRoutes');

const {CheckAuthentication,RestrictUserOnlyTO} = require('./middleware/userMiddleware')

// connect the server

connectdatabase();


// middle ware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(CheckAuthentication);

// set data

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// Routes

app.use('/url',RestrictUserOnlyTO(["NORMAL","ADMIN"]),urlroutes);
app.use('/user',userRoutes);
app.use('/',urlroutes); // StaticRoutes(homepage)

// server start

app.listen(port, ()=>console.log(`Server Started:: ${port}`));

    