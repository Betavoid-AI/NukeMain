require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

//This is for updating stuff in data based, and wrote this when i was making update title and description in view-notes.ejs in link 431, go there thats start point
//did app.use in 43 after writing
const methodOverride = require('method-override');

const connectDB = require('./.vs/server/config/db'); //this connects the mongodb database, we are getting the db.js which is located in the server config folder

//for user profile, user login, and shit
const session  = require('express-session'); //this will make sure that the use stays login
const passport = require('passport'); //this will help us get their shit from server
const MongoStore = require('connect-mongo'); //connecting mongo

const app = express();
const port = 5000 || process.env.PORT;

//this is also for the authenticatiion of the user
app.use(session({
    secret: 'Thugstools',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    //cookie: {maxAge: new Date(Date.now() + (3600000))} //user will get logged out after 3600000 seconds, which is an hour
}));

 
// makes the app use the passport and session we imported above
app.use(passport.initialize());
app.use(passport.session());



//this will help us communicate the data from one page to another or to a database
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//did this after doing a reuire in line 7 above
app.use(methodOverride("_method"));


//Connect to the database
connectDB();



//static files - will be able to link images, scripts, files from this folder named public
app.use(express.static('Public'));



//template engine - for building layouts
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');




app.use('/', require('./.vs/server/routes/index')); // means that this is the index of all the url and pages, now will add pafes here

app.use('/', require('./.vs/server/routes/dash')); //this is for the dashboard and wil have its own index

app.use('/', require('./.vs/server/routes/auth')); //for login, signup and shit



//server will point to this
app.listen(port, () => {
    console.log('app listening on port', {port});
});



