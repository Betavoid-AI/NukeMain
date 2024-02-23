const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalculationsSchema = new Schema({

    Countofcal: {
        type: String,
        ref: 'User'
    },
    VariableExtract_Trained_Model: {
        type: String,
        ref: 'User'
    },
    noteid_chat_inp: {
        type: Schema.ObjectId,
        ref: 'Notes'
    }
});

module.exports = mongoose.model('Inpushcals', CalculationsSchema);