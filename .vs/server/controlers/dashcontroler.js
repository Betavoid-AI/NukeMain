const Note = require('../models/Notes');
const ProTag = require('../models/profile_tags');
const mongoose = require('mongoose');
const user = require('../models/user');
const chatH = require('../models/chathistory');
const inpusforms = require('../models/inpusform');
const Bundleform = require('../models/Bundle');
const formulas = require('../../../Engineeirng/variables');
const userreqs = require('../../../3_Hendle_questions_actions_AI/3_Hendle_questions_actions');
const backbone = require('../config/Backbone');
const natural = require('natural');
const form = require('../../../Engineeirng/formulas');
const inpusformscals = require('../models/calculations');

const bundle = require('../models/Bundle');

const userreplyAI = require('../../../1_user_responding_to_AI/1_user_said_predict');


//we will do all the fucctions like adding notes, deleting notes, etc here. we have defined the data structure of the notes in the model in server folder



//THHIS IS THE PAGE 2
/** 
 * GET Dashboard
 *
 */

exports.dash = async (req, res) => {

    //limiting how many notes can fit in the recent screen
    let perPage = 12;
    let page = req.query.page || 1

    //we made few mockup notes here using try and catch and puushed it in the databse, if you are wonder where those 4 notes came from
    const locals = {
        title2: "Bundle Dashboard", //we are pushing the title of the page into the main.ejs in line 7 from here,  will get injected into locals.title
        description: "View all your bundles in this dashboard" //pushing descrion o fthe page into main.ejs in line 8 from here, will get injected into locals.tdescripyion
    } //this just sets the meta data for the page

    try { //declared a const above named Note, which refers to model folder and Notes.js inside it
        const notes = await Note.find({});                                                //here, we are using Notes, which is exported from the server/models/Notes.js, Notes.js creates the database in the mongodb
        const allbundles = await bundle.find({});                                                //here, we are using Notes, which is exported from the server/models/Notes.js, Notes.js creates the database in the mongodb
        console.log("here: "+allbundles);


        //limiting cards to 9 per page ------------------------------
        //for limiting the PROJECTS per page ======================================================
        Note.aggregate([
            {
                $sort: {
                    updatedAt: -1,
                }
            },
            {
                $match: { user: mongoose.Types.ObjectId(req.user.id) }
            },
            {   //Important to define if when added more properties to the cards------
                $project: {
                    title: { $substr: ['$title', 0, 30] },
                    body: { $substr: ['$body', 0, 100] },
                    tag: { $substr: ['$tag', 0, 100] }, //here we limit how many char of the description to show on the card
                    finish: { $substr: ['$finish', 0, 100] },
                    bundleid: { $substr: ['$bundleid', 0, 2000] },
                }
            }

        ])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec(function (err, notes) {
                Note.count().exec(function (err, count) {
                    if (err) return next(err);








                    //for limiting the BUNDLES per page ======================================================
                    bundle.aggregate([
                        {
                            $sort: {
                                updatedAt: -1,
                            }
                        },
                        {
                            $match: { user: mongoose.Types.ObjectId(req.user.id) }
                        },
                        {   //Important to define if when added more properties to the cards------
                            $project: {
                                Allnodes: { $substr: ['$Allnodes', 0, 10000] },
                                titleob: { $substr: ['$titleob', 0, 100] },
                                emogi: { $substr: ['$emogi', 0, 100] },
                                descriptionob: { $substr: ['$descriptionob', 0, 100] },
                                updatedAt: { $substr: ['$updatedAt', 0, 100] },
                                createAt: { $substr: ['$createAt', 0, 100] },
                            }
                        }

                    ])
                        .skip(perPage * page - perPage)
                        .limit(perPage)
                        .exec(function (err, allbundles) {
                            bundle.count().exec(function (err, count) {
                                if (err) return next(err);










                                //RENDERING MAIN PAGE -----------------------
                                //sending notes from the database into the index which is the dashboards main ejs and layout dash.


                                res.render('Dash/index', {
                                    displayName: req.user.firstname,
                                    displayLast: req.user.lastname,
                                    date: req.user.createdat,
                                    proimgdash: req.user.profileimage,
                                    noteID: req.params.id,
                                    locals,
                                    notes,
                                    allbundles,
                                    Back: backbone,
                                    layout: '../views/layouts/dash',
                                    current: page,
                                    pages: Math.ceil(count / perPage)

                                }); //THIS IS WHERE WE ACTUALLY LINK THE PAGE WE MAKE, RENDER('NAME OF THE PAGE.EJS', LOCALS FOR METADATA), HERE YOU WILLL PASS THE NAME OF THE PAGE YOU MADE.







                            })
                        })






                })
            })

    } catch (error) {

        console.log(error);

    }

}


// update, render, and del from inside the note view ------------------------------------------------------------
// update, render, and del from inside the note view ------------------------------------------------------------
// update, render, and del from inside the note view ------------------------------------------------------------


/** 
 * View File
 *
 */

exports.dashViewNote = async (req, res) => {


    // try {
    //     await chatH.insertMany([
    //         {
    //             promp: "hello",
    //             aires: "sup",
    //             noteid_chat: "6431bdad7cc60fdce08889a0",
    //             createAt: "1671634422539"
    //         }   
    //     ])
    // } catch (error) {
    //     console.log(error)
    // }


    const note = await Note.findById({ _id: req.params.id })
        .where({ user: req.user.id }).lean();

    const chathistory = await chatH.find({});
    const inpushis = await inpusforms.find({});


    if (note) {
        res.render('dash/view-notes', {

            chathistory, //oldchat data
            chatH,
            inpushis,
            inpusforms,
            nounsv: natural,
            fors: formulas,
            noteID: req.params.id,
            proimgviewnote: req.user.profileimage,
            displayName: req.user.firstname,
            displayLast: req.user.lastname,
            note,
            backbone: backbone,
            reqsfromuser: userreqs,
            user_roly_ai_1: userreplyAI, //not being used inside, just including here so the AI's js file can run
            layout: '../views/layouts/dash_Note'
        });
    } else {
        res.send("Something went wrong... :[")
    }

}




/** 
 * View Bundle
 *
 */

exports.dashViewBundle = async (req, res) => {

    const bundlefinal = await bundle.findById({ _id: req.params.id })
    .where({ user: req.user.id }).lean();

    const notes = await Note.find({});    

    const Nodes = await Note.find({ bundleid: req.params.id });

    res.render('dash/View_Bundle', {

        bundlefinal,
        bundleid: req.params.id,
        Thisbundle: bundlefinal,
        notes,
        Nodes,
        bundleID: req.params.id,
        proimgviewnote: req.user.profileimage,
        displayName: req.user.firstname,
        displayLast: req.user.lastname,
        date: req.user.createdat,
        proimgdash: req.user.profileimage,
        layout: '../views/layouts/Bundleview'
    });

}



/** 
 * PUT
 * update specific note
 */

exports.dashUpdateNote = async (req, res) => {

    try {
        await Note.findOneAndUpdate(
            { _id: req.params.id },
            { title: req.body.title, body: req.body.body, finish: req.body.finish, updatedAt: Date.now() } //if both body and title are coming from 1 form you can write both title and body req in 1 {} but in this we have 2 diff forms and 2 diff submit button and thats why we need 2 diff {}
            //IMP, READ THIS - here in the req.body.title, the title comes from the view-notes.ejs line 438, we gave text input box a name = 'title', this finds that text input box of name title and gets the data from there to push and update in database
        ).where({ user: req.user.id }); //this where functions makes sure no other user can screw with notes and only owner of note can edit the note

        res.redirect('#');

    } catch (error) {
        console.log(error);
    }


}

/** 
 * PUT
 * update Bundle
 */

exports.updatebundle = async (req, res) => {

    try {
        await bundle.findOneAndUpdate(
            { _id: req.params.id },
            { titleob: req.body.titleob, descriptionob: req.body.descriptionob, Allnodes: req.body.Allnodes, Allwire: req.body.Allwire, emogi: req.body.emogi, updatedAt: Date.now() } 
            
        ).where({ user: req.user.id });

    } catch (error) {
        console.log(error);
    }


}


/** 
 * PUT
 * update Bundle from home dashboard
 */

exports.updatebundlefromhome = async (req, res) => {

    try {
        await bundle.findOneAndUpdate(
            { _id: req.params.id },
            { titleob: req.body.titleob, descriptionob: req.body.descriptionob, Allnodes: req.body.Allnodes, Allwire: req.body.Allwire, emogi: req.body.emogi, updatedAt: Date.now() } 
            
        ).where({ user: req.user.id });

        

    } catch (error) {
        console.log(error);
    }


}

/** 
 * PUT
 * update Bundle for save button
 */

exports.updatebundle2 = async (req, res) => {

    try {
        await bundle.findOneAndUpdate(
            { _id: req.params.id },
            { titleob: req.body.titleob, descriptionob: req.body.descriptionob, Allnodes: req.body.Allnodes, Allwire: req.body.Allwire, emogi: req.body.emogi, updatedAt: Date.now() } 
            
        ).where({ user: req.user.id });

        const thepathtothebundle3 = '/Bundle_Editor/' + req.params.id;
        res.redirect(thepathtothebundle3);

    } catch (error) {
        console.log(error);
    }


}

//THHIS IS THE PAGE 2
/** 
 * DELETE
 * del specific note
 */

exports.dashDeleteNote = async (req, res) => {

    try {

        await Note.deleteOne({
            _id: req.params.id
        }).where({ user: req.user.id });

        await inpusforms.deleteMany({
            noteid_chat_inp: req.params.id
        });

        if (!req.params.bid == '') {
            
            console.log('1');
        const thepathtothebundle2 = '/Bundleview/' + req.params.bid;
        res.redirect(thepathtothebundle2)

        } else {

            console.log('2');
        res.redirect('/dash');

        }

    } catch (error) {

        console.log(error);

    }

}

// update, render, and del from inside the note view ------------------------------------------------------------
// update, render, and del from inside the note view ------------------------------------------------------------
// update, render, and del from inside the note view ------------------------------------------------------------











// Calculations page -----------------------------------------------------------------------------------------
// Calculations page -----------------------------------------------------------------------------------------
// Calculations page -----------------------------------------------------------------------------------------


/** 
 * View File
 *
 */

exports.ViewNoteCalculations = async (req, res) => {


    // try {
    //     await chatH.insertMany([
    //         {
    //             promp: "hello",
    //             aires: "sup",
    //             noteid_chat: "6431bdad7cc60fdce08889a0",
    //             createAt: "1671634422539"
    //         }   
    //     ])
    // } catch (error) {
    //     console.log(error)
    // }


    const note = await Note.findById({ _id: req.params.id })
        .where({ user: req.user.id }).lean();

    const chathistory = await chatH.find({});
    const inpushis = await inpusforms.find({});
    const calcount = await inpusformscals.find({});


    if (note) {
        res.render('dash/view-notes-Calculations', {

            chathistory, //oldchat data
            chatH,
            inpushis,
            inpusforms,
            calcount,
            nounsv: natural,
            fors: formulas,
            form,
            noteID: req.params.id,
            proimgviewnote: req.user.profileimage,
            displayName: req.user.firstname,
            displayLast: req.user.lastname,
            note,
            layout: '../views/layouts/dash_Note'
        });
    } else {
        res.send("Something went wrong... :[")
    }

}


// Calculations page -----------------------------------------------------------------------------------------
// Calculations page -----------------------------------------------------------------------------------------
// Calculations page -----------------------------------------------------------------------------------------









// newproject from sidebar ------------------------------------------------------------
// newproject from sidebar ------------------------------------------------------------
// newproject from sidebar ------------------------------------------------------------


/** 
 * GET Dashboard new project
 *
 */

exports.dashnewpro = async (req, res) => {

    const locals = {
        title2: "nodejs dashboard",
        description: "free nodejs app"

    }

    try {

        res.render('Dash/index_newproject', {
            proimgdash: req.user.profileimage,
            noteID: req.params.id,
            locals,
            layout: '../views/layouts/dash'
        });

    } catch (error) {

        console.log(error);

    }

}


/** 
 * GET Dashboard market page
 *
 */

exports.dashmarket = async (req, res) => {

    const locals = {
        title2: "nodejs dashboard",
        description: "free nodejs app"

    }

    try {

        res.render('Dash/index_market', {
            proimgdash: req.user.profileimage,
            noteID: req.params.id,
            locals,
            layout: '../views/layouts/dash'
        });

    } catch (error) {

        console.log(error);

    }

}



/** 
 * GET Dashboard manufacturing page
 *
 */

exports.dashmanufact = async (req, res) => {

    const locals = {
        title2: "nodejs dashboard",
        description: "free nodejs app"

    }

    try {

        //Dash/index_manufacturing
        res.render('Dash/index_manufacturing', {
            proimgdash: req.user.profileimage,
            noteID: req.params.id,
            locals,
            layout: '../views/layouts/dash'
        });

    } catch (error) {

        console.log(error);

    }

}


/** 
 * GET Bundle
 *
 */

exports.dashbundle = async (req, res) => {

    const locals = {
        title2: "Make New Bundle",
        description: "Make A New Nuke Bundle"

    }

    try {

        res.render('Dash/Project-Bundle-creator', {
            proimgdash: req.user.profileimage,
            noteID: req.params.id,
            locals,
            layout: '../views/layouts/bundle_lay'
        });

    } catch (error) {

        console.log(error);

    }

}

/** 
 * GET Node Editor
 *
 */

exports.Nodeedit = async (req, res) => {

    const locals = {
        title2: "Node Editor",
        description: "Edit a bundle"

    }

    const Thisbundle = await bundle.findById({ _id: req.params.id })
    .where({ user: req.user.id }).lean();

    const Nodes = await Note.find({ bundleid: req.params.id });

    try {

        res.render('Dash/Node-Editor-For-Bundles', {

            bundleid: req.params.id,
            Thisbundle,
            Nodes,
            proimgdash: req.user.profileimage,
            locals,
            layout: '../views/layouts/bundle_lay'
        });

    } catch (error) {

        console.log(error);

    }

}


/** 
 * ADD NEW FROM SIDEBAR
 * 
 */

exports.dashaddnotesubmitfromSB = async (req, res) => {

    try {

        req.body.user = req.user.id;
        await Note.create(req.body);

        res.redirect('/dash');

    } catch (error) {
        console.log(error);
    }


}



// newproject from sidebar ------------------------------------------------------------
// newproject from sidebar ------------------------------------------------------------
// newproject from sidebar ------------------------------------------------------------

























// update, render, and del from dashboard ------------------------------------------------------------
// update, render, and del from dashboard ------------------------------------------------------------
// update, render, and del from dashboard ------------------------------------------------------------

//THHIS IS THE PAGE 2
/** 
 * PUT
 * update from the dashboard
 */

exports.dashUpdateNotefromDash = async (req, res) => {

    try {
        await Note.findOneAndUpdate(
            { _id: req.params.id },
            { title: req.body.title, body: req.body.body, finish: req.body.finish, updatedAt: Date.now() } //if both body and title are coming from 1 form you can write both title and body req in 1 {} but in this we have 2 diff forms and 2 diff submit button and thats why we need 2 diff {}
            //IMP, READ THIS - here in the req.body.title, the title comes from the view-notes.ejs line 438, we gave text input box a name = 'title', this finds that text input box of name title and gets the data from there to push and update in database
        ).where({ user: req.user.id }); //this where functions makes sure no other user can screw with notes and only owner of note can edit the note

        res.redirect('/dash');

    } catch (error) {
        console.log(error);
    }


}


//THHIS IS THE PAGE 2
/** 
 * DELETE FROM DESH
 * del specific note
 */

exports.dashDeleteNoteFromDash = async (req, res) => {

    const searchResults = await chatH.find({
        $or: [
            { noteid_chat: { _id: req.params.id } }
        ]
    })

    try {

        await Note.deleteOne({
            _id: req.params.id
        }).where({ user: req.user.id });

        await chatH.deleteMany({
            noteid_chat: req.params.id
        });

        await inpusforms.deleteMany({
            noteid_chat_inp: req.params.id
        });

        console.log('2');

        res.redirect('/dash');


    } catch (error) {
        console.log(error);
    }

}

/** 
 * DELETE FROM NODE EDITOR
 */

exports.dashDeleteNoteFromNE = async (req, res) => {

    const searchResults = await chatH.find({
        $or: [
            { noteid_chat: { _id: req.params.id } }
        ]
    })

    try {

        await Note.deleteOne({
            _id: req.params.id
        }).where({ user: req.user.id });

        await chatH.deleteMany({
            noteid_chat: req.params.id
        });

        await inpusforms.deleteMany({
            noteid_chat_inp: req.params.id
        });

        const urlfornodeeditor = '/Bundle_Editor/' + req.params.bid;
        res.redirect(urlfornodeeditor);


    } catch (error) {
        console.log(error);
    }

}



/** 
 * DELETE bundle
 */

exports.deletebundle = async (req, res) => {


    try {

        await bundle.deleteOne({
            _id: req.params.id
        }).where({ user: req.user.id });

        await Note.deleteMany({
            bundleid: req.params.id
        });

        res.redirect('/dash');

    } catch (error) {
        console.log(error);
    }

}


/** 
 * MAKE
 * make new note - prints the make new note page
 */

exports.dashaddnote = async (req, res) => {

    try {

        res.render('dash/view-Addnotes', {
            proimgviewnote: req.user.profileimage,
            layout: '../views/layouts/dash_AddNote'
        });

    } catch (error) {

        console.log(error);

    }
}

/** 
 * MAKE
 * make new bundle
 */

exports.dashbundlenoai = async (req, res) => {

    try {

        res.render('dash/new_bundle_fromdash', {
            proimgviewnote: req.user.profileimage,
            layout: '../views/layouts/bundle_fromdashbtn'
        });

    } catch (error) {

        console.log(error);

    }
}


/** 
 * NAME A NEW PROJECT IN DATABASE - creates a new note in database
 * 
 */

exports.dashaddnotesubmit = async (req, res) => {

    try {

        req.body.user = req.user.id;
        await Note.create(req.body);

        res.redirect('/dash');

    } catch (error) {
        console.log(error);
    }


}

/** 
 * new bundle project
 * 
 */

exports.newbundlepro = async (req, res) => {

    try {

        const thepathtothebundle = '/Bundleview/' + req.params.id; //the paramsid actually gets the id that we passed from the view_bundle.ejs when submitting the form.

        req.body.user = req.user.id;
        await Note.create(req.body);

        res.redirect(thepathtothebundle);

    } catch (error) {
        console.log(error);
    }


}

/** 
 * new bundle project from editor
 * 
 */

exports.profromeditor = async (req, res) => {

    try {

        const thepathtothebundle2 = '/Bundle_Editor/' + req.params.id; //the paramsid actually gets the id that we passed from the view_bundle.ejs when submitting the form.

        req.body.user = req.user.id;
        await Note.create(req.body);

        res.redirect(thepathtothebundle2);

    } catch (error) {
        console.log(error);
    }


}





// update, render, and del from dashboard ------------------------------------------------------------
// update, render, and del from dashboard ------------------------------------------------------------
// update, render, and del from dashboard ------------------------------------------------------------



/** 
 * SEARCH
 * 
 */

exports.dashsearch = async (req, res) => {

    try {
        res.render('/dash/search', {
            searchResults: '',
            layout: '../views/layouts/dash'
        })
    } catch (error) {

    }


}


/** 
 * SEARCH submit
 * 
 */


exports.dashsearchsubmit = async (req, res) => {

    try {

        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChats = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

        const searchResults = await Note.find({
            $or: [

                { title: { $regex: new RegExp(searchNoSpecialChats, 'i') } },
                { body: { $regex: new RegExp(searchNoSpecialChats, 'i') } }
            ]
        }).where({ user: req.user.id });

        res.render('dash/search', {
            searchResults,
            layout: '../views/layouts/dash'
        })

    } catch (error) {
        console.log(error);
    }

}







// user profile ------------------------------------------------------------
// user profile ------------------------------------------------------------

//THHIS IS THE PAGE 2
/** 
 * User profile
 *
 */

exports.uprofile = async (req, res) => {

    // feeding dummy data---------------------------
    // try {
    //     await ProTag.insertMany([
    //         {
    //             user: "642523e23085c3a317f780aa",
    //             protag: "Mechanical Engineering",
    //             createAt: "1671634422549"
    //         },
    //     ])
    // } catch (error) {
    //     console.log(error)
    //     console.log("AA");
    // }

    try {

        const tags = await ProTag.find({}).where({ user: req.user.id });

        res.render('dash/usprofile', {
            tags,
            proimg: req.user.profileimage,
            firstna: req.user.firstname,
            lastna: req.user.lastname,
            layout: '../views/layouts/profile_lay'
        });

    } catch (error) {

        console.log(error);

    }


}



/** 
 * add skills
 * 
 */

exports.adduprofile = async (req, res) => {

    try {

        req.body.user = req.user.id;
        await ProTag.create(req.body);

        res.redirect('/dash/usprofile');

    } catch (error) {
        console.log(error);
    }


}



//THHIS IS THE PAGE 2
/** 
 * DELETE tag
 */

exports.deluprofile = async (req, res) => {

    try {

        await ProTag.deleteOne({
            _id: req.params.id
        }).where({ user: req.user.id });

        res.redirect('/dash/usprofile');

    } catch (error) {
        console.log(error);
    }

}

// user profile ------------------------------------------------------------
// user profile ------------------------------------------------------------





// OPENAI  ------------------------------------------------------------
// OPENAI  ------------------------------------------------------------

/** 
 * GET the openai - dummy data shit
 */

exports.openaicall = async (req, res) => {

    try {

        res.status(200).send({
            message: 'Hello. welcome to NUKE, i am your artifitial engineer. Lets build somthing new!'
        });

    } catch (error) {
        console.log(error);
    }

}

/** 
 * POST the openai
 */

exports.openaicallpost = async (req, res) => {

    const { Configuration, OpenAIApi } = require('openai');

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    try {

        const prompt = req.body.prompt; //REQUEST = getting data from the frontend, the prompt is the name of the textarea in the view-note chat layer

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`, //passing the input form the textarea here
            temperature: 0, // Higher values means the model will take more risks.
            max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
            top_p: 1, // alternative to sampling with temperature, called nucleus sampling
            frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
            presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
        });

        res.status(200).send({
            bot: response.data.choices[0].text //RESPONSE = this is the response of the AI
        });

    } catch (error) {
        console.error(error)
        res.status(500).send(error || 'Something went wrong :(');
    }

}




/** 
 * send new message to the databse
 * 
 */

exports.addnewmsg = async (req) => {


    try {
        req.body.user = req.user.id;
        chatH.create(req.body);

    } catch (error) {
        console.log(error);
    }


}

// OPENAI  ------------------------------------------------------------
// OPENAI  ------------------------------------------------------------







/** 
 * send inpus form to DB
 * 
 */

exports.inpus = async (req, res) => {

    try {
        req.body.user = req.user.id;
        inpusforms.create(req.body);
    } catch (error) {
        console.log(error);
    }


}

/** 
 * new bundle
 * 
 */

exports.newbundle = async (req, res) => {

    try {
        req.body.user = req.user.id;
        Bundleform.create(req.body);

        res.redirect('/dash');

    } catch (error) {
        console.log(error);
    }


}

//THHIS IS THE PAGE 2
/** 
 * DELETE inpus
 */

exports.delinpus = async (req, res) => {

    try {
        await inpusforms.deleteMany({
            noteid_chat_inp: req.params.id
        });

    } catch (error) {
        console.log(error);
    }

}




/** 
 * send count of calculations if DB
 * 
 */

exports.inpuscals = async (req, res) => {

    try {
        req.body.user = req.user.id;
        inpusformscals.create(req.body);
    } catch (error) {
        console.log(error);
    }


}


/** 
 * DELETE calculation count
 */

exports.delinpuscals = async (req, res) => {

    console.log('nunu');

    try {
        await inpusformscals.deleteMany({
            noteid_chat_inp: req.params.id
        });

    } catch (error) {
        console.log(error);
    }

}

