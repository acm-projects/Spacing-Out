const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: ""
    },
    body: {
        type: String,
        required: true,
        default: ""
    },
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
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
    }
});

module.exports = mongoose.model('Note', noteSchema);