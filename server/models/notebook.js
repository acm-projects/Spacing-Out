const mongoose = require('mongoose');

const Note = require('./note');

const notebookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: ""
    },
    description: {
        type: String,
        required: true,
        default: ""
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
    notes: [{
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Note'
        }
    }],
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
    }
});

module.exports = mongoose.model('Notebook', notebookSchema);