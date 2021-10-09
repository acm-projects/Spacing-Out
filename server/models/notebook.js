const mongoose = require('mongoose');

const Note = require('./note');

const notebookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
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
        },  
        default: []
    }]
});

module.exports = mongoose.model('Notebook', notebookSchema);