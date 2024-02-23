const express = require('express')
const router = express.Router();
const maincontroler = require('../controlers/maincontroler'); // here in the path "../"means we are going out of folder routes into the folder server. if you write the ./ or ../ wrote we will give a dropdown to choose folder

/**
 *  App Routers
 */

router.get('/', maincontroler.homepage); //page 1,the syntex get('/about', maincontroler.About) means that /about is the url and page in the code is located in "maincontroler.js"in the folder server/controler.
router.get('/about', maincontroler.About); //go to maincoontroler to see how the pages are made in it

module.exports = router;