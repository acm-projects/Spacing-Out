const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
    prompt: {
        type: String
    },
    answer: {
        type: String
    }
});

module.exports = mongoose.model('Flashcard', flashcardSchema);