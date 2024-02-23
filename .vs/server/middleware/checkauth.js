const user = require("../models/user")

exports.isLoggedIn = function(req, res, next) {

    if(req.user) {
        next();
        console.log('Still Logged in')
    } else {

        return res.status(401).send('Access Denied'); // instead of send you can do render and make a page which you can send user if they are not logged in
    }
}