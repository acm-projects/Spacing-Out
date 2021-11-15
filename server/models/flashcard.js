const mongoose = require('mongoose');
const dayjs = require('dayjs');

const flashcardSchema = new mongoose.Schema({
    front: {
        type: String,
        required: false,
        default: ""
    },
    back: {
        type: String,
        required: false,
        default: ""
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FlashcardSet',
        required: false,
        default: null
    },
<<<<<<< HEAD
    interval: {
        type: Number,
        default: 0
    },
    repetition: {
        type: Number,
        default: 0
    },
    efactor: {
        type: Number,
        default: 2.5
    },
    dueDate: {
        type: Date,
        default: dayjs(Date.now()).toISOString()
=======
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
>>>>>>> 5b92fe9 (new user branch w/ encryption (no de-encryption))
    }
});

module.exports = mongoose.model('Flashcard', flashcardSchema);