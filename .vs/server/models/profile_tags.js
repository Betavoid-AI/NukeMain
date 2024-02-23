const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proTagsSchema = new Schema({

    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },

    protag: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Ptags', proTagsSchema);