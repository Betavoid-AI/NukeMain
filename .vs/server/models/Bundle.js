const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bundlestore = new Schema({


    Allnodes: {
        type: Object,
        required: true,
    },
    Allwire: {
        type: Object,
        required: false,
    },
    titleob: {
        type: String,
        required: true,
    },
    descriptionob: {
        type: String,
        required: true,
    },
    emogi: {
        type: String,
        required: false,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
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

module.exports = mongoose.model('Bundle', Bundlestore);