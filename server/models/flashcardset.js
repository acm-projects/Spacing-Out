const mongoose = require('mongoose');
const Flashcard = require('./flashcard');

const flashcardSetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    /*creator {
        type: User
        required: true
    },*/
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
    flashcards: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Flashcard'
    }]
});

module.exports = mongoose.model('FlashcardSet', flashcardSetSchema);