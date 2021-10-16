const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Flashcard = require('./flashcard');

const flashcardSetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: ""
    },
    description: {
        type: String,
        required: false,
        default: ""
    },
    /*creator: {
        type: User
        required: true
    },*/
    dateCreated: {
        type: Date,
        required: true,
        default: new Date()
    },
    dateUpdated: {
        type: Date,
        required: true,
        default: new Date()
    },
    flashcards: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Flashcard'
    }]
});

module.exports = mongoose.model('FlashcardSet', flashcardSetSchema);