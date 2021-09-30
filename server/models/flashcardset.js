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
    flashcards: {
        type: [Flashcard],
        required: true
    }
});

module.exports = mongoose.model('FlashcardSet', flashcardSetSchema);