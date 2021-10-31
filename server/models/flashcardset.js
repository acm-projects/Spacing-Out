const mongoose = require('mongoose');

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
    }],
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
    }
});

module.exports = mongoose.model('FlashcardSet', flashcardSetSchema);