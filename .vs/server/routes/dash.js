const express = require('express')
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkauth');
const dashcontroler = require('../controlers/dashcontroler');



/**
 *  Dashboard Routes
 */

//these are routes from dash
        // "/dash" is the url and nothing else
router.get('/dash', isLoggedIn, dashcontroler.dash); //that isloggedin checks if the user is logged in ot not before send them to the dashboard
router.put('/dash/:id', isLoggedIn, dashcontroler.dashUpdateNotefromDash); //this is for opening the note and updatni

//pages from sidebar - New Project
router.get('/dash_newproject', isLoggedIn, dashcontroler.dashnewpro);
router.post('/dash_newproject', isLoggedIn, dashcontroler.dashaddnotesubmitfromSB);
router.get('/dash_market', isLoggedIn, dashcontroler.dashmarket);
router.get('/dash_manufact', isLoggedIn, dashcontroler.dashmanufact);







//Delete
router.delete('/dash/Item-delete-fromdash/:id', isLoggedIn, dashcontroler.dashDeleteNoteFromDash);
//Create New
router.get('/dash/view-Addnotes', isLoggedIn, dashcontroler.dashaddnote); // this opens the page where we add new note
router.post('/dash/view-Addnotes', isLoggedIn, dashcontroler.dashaddnotesubmit);









//calculations page for the project
router.get('/dash/Item-calculations/:id', isLoggedIn, dashcontroler.ViewNoteCalculations);










//Inside the notes - view notes and shit - old chat data is passed inside dashViewNote ==============================
router.get('/dash/Item/:id', isLoggedIn, dashcontroler.dashViewNote);
router.put('/dash/Item/:id', isLoggedIn, dashcontroler.dashUpdateNote);
router.delete('/dash/Item-delete/:id/:bid', isLoggedIn, dashcontroler.dashDeleteNote);

//sending new messages to the database so we can display them later in old messages
router.post('/dash/nm', isLoggedIn, dashcontroler.addnewmsg);







//snedng inpus form to DB
router.post('/dash/inpus', isLoggedIn, dashcontroler.inpus);
router.delete('/dash/inpus-delete/:id', isLoggedIn, dashcontroler.delinpus);





//For Searching the projects in the Dash
router.get('/dash/search', isLoggedIn, dashcontroler.dashsearch);
router.post('/dash/search', isLoggedIn, dashcontroler.dashsearchsubmit);

//profile
router.get('/dash/usprofile', isLoggedIn, dashcontroler.uprofile); // to display profile page
router.post('/dash/usprofile', isLoggedIn, dashcontroler.adduprofile); // to add new tags
router.delete('/dash/usprofile/Item-delete/:id', isLoggedIn, dashcontroler.deluprofile); // to add new tags




//OPENAI server calls ======== calls for response from openai
router.get('/dash/openairespo', isLoggedIn, dashcontroler.openaicall);
router.post('/dash/openairespo', isLoggedIn, dashcontroler.openaicallpost);
//OPENAI server calls ======== calls for response from openai




//snedng caluculation count to form to DB
router.post('/dash/inpuscals', isLoggedIn, dashcontroler.inpuscals);
router.delete('/dash/inpuscals-delete/:id', isLoggedIn, dashcontroler.delinpuscals);














//BUNDLE STUFF +++++++++++++++++++++++++++++++++++++++++++++++++++
router.post('/dash/newbundle', isLoggedIn, dashcontroler.newbundle); //this is the DB form for making new bundle - DATABASE
router.get('/dash_bundle', isLoggedIn, dashcontroler.dashbundle); //this is new bundle page - PAGE new one


router.get('/dash_bundlewithoutAI', isLoggedIn, dashcontroler.dashbundlenoai); //this is new bundle page from dash, to add without AI

//node editor page
router.get('/Bundle_Editor/:id', isLoggedIn, dashcontroler.Nodeedit); //this is bundle editor - PAGE

//View Bundle
router.get('/Bundleview/:id', isLoggedIn, dashcontroler.dashViewBundle);

//Delete Bundle
router.delete('/dash/Bundle/:id', isLoggedIn, dashcontroler.deletebundle);

//Update Bundle
router.put('/Bundle_Editor/:id', isLoggedIn, dashcontroler.updatebundle);

//Update Bundle - from home dashboard
router.put('/Bundle_Editorfromhome/:id', isLoggedIn, dashcontroler.updatebundlefromhome);

//Update Bundle - for save button
router.put('/Bundle_Editor2/:id', isLoggedIn, dashcontroler.updatebundle2);

//add new project from bundle
router.post('/dash/Addprojectfrombundle/:id', isLoggedIn, dashcontroler.newbundlepro);

//add new project from editor
router.post('/dash/nodeprojectfromeditor/:id', isLoggedIn, dashcontroler.profromeditor);


//delete project fron node editor
router.delete('/dash/Item-delete-fromnodeeditor/:id/:bid', isLoggedIn, dashcontroler.dashDeleteNoteFromNE);

//BUNDLE STUFF +++++++++++++++++++++++++++++++++++++++++++++++++++







//first make a form that makes a mongo entry for bundle, then take id from it and make a notes entry and pass that id in it
module.exports = router;