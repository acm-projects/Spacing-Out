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
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
=======
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
>>>>>>> main
    }
});

module.exports = mongoose.model('Flashcard', flashcardSchema);