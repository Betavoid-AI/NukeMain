const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharHistorySchema = new Schema({

    keysinp: {
        type: Array,
        ref: 'User'
    },
    numsinp: {
        type: Array,
        required: true,
    },
    uns: {
        type: Array,
        required: true,
    },
    nameop: {
        type: String,
        required: true,
    },
    noteid_chat_inp: {
        type: Schema.ObjectId,
        ref: 'Notes'
    }
});

module.exports = mongoose.model('Inpush', CharHistorySchema);