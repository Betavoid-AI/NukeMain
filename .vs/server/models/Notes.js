//this is just a data structure, here we define how to store the data
//this is what creates databae inside the mongodb

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//every note will see the user, so that the user get just their notes and not anyone elses
const NotesSchema = new Schema({

    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    finish: {
        type: String,
        required: true,
    },
    bundleid: {
        type: String,
        required: false,
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('Notes', NotesSchema);