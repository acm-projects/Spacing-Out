const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: false,
        default: ""
    },
    answer: {
        type: String,
        required: false,
        default: ""
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FlashcardSet',
        required: false,
        default: null
    }
});

module.exports = mongoose.model('Flashcard', flashcardSchema);