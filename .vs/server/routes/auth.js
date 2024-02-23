const express = require('express');
const { Promise, Error } = require('mongoose'); ///////
const router = express.Router();
const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;       //copy pasted from here - https://www.passportjs.org/packages/passport-google-oauth20/


const User = require('../models/user');


// we passed the google credentials here for authentication
//also from that site above in comments
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID, //all 3 stored in .env file, check it out
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    async function (accessToken, refreshToken, profile, done) {

        //we get the data of the user who just login or signedup
        const newuser = {
            googleid: profile.id,
            displayname: profile.displayName,
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            profileimage: profile.photos[0].value
        }

        try {
             let user = await User.findOne({ googleid: profile.id });

            //this checks if the human is user or not, if not it makes them a user and signs them in
            if (user) {
                done(null, user);
            } else {
                user = await User.create(newuser);
                done(null, user);
            }

        }
        catch (error) {
            console.log(error);

        }

    }
));


//when user will click login, it will go to auth google
// Google login route
router.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })); //this tells what data to retrive when success

// Restrieve user data
router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login-failure',
        successRedirect: '/dash'

    })
);





//Router if somthing goes wrong
router.get('/logiin-failure', (req, res) => {
    res.send('somthing went wrong...')
})



//Logout
router.get('/logout', (req, res) => {
    req.session.destroy(error => {
        if(error) {
            console.log(error);
            res.send('Error logging out')
        } else {
            res.redirect('/');
        }
    })
});



//presist user data after successful authentication
passport.serializeUser(function (user, done) {
    done(null, user.id);
});


//retrive user data from session
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    })
});


module.exports = router;