const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharHistorySchema = new Schema({

    promp: {
        type: String,
        ref: 'User'
    },
    aires: {
        type: String,
        required: true,
    },
    noteid_chat: {
        type: Schema.ObjectId,
        ref: 'Notes'
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Chatpast', CharHistorySchema);