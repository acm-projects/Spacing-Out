const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    /*creator: {
        type: User,
        required: true
    },*/
    wordCount: {
        type: Number,
        default: 0,
        required: true
    },
    dateCreated: {
        type: Date,
        default: new Date(),
        required: true
    },
    dateUpdated: {
        type: Date,
        default: new Date(),
        required: true
    }
});

module.exports = mongoose.model('Note', noteSchema);