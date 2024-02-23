//this is just a data structure, here we define how to store the data
//this is what creates databae inside the mongodb


const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({

googleid: {   
    type: String,
    required: true
},

displayname: {
    type: String,
    required: true
},

firstname: {
    type: String,
    required: true
},

lastname: {
    type: String,
    required: true
},

profileimage: {
    type: String,
    required: true
},

createdat: {
    type: Date,
    default: Date.now
}

});

module.exports = mongoose.model('user', UserSchema);