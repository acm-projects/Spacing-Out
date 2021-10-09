const express = require('express');
const router = express.Router();
const Flashcard = require('../models/flashcard'); 
const FlashcardSet = require('../models/flashcardset');

// Creating flashcard
router.post('/', async (req, res) => {
    const flashcard = new Flashcard({
        prompt: req.body.prompt,
        answer: req.body.answer
    });

    try {
        const newFlashcard = await flashcard.save();
        res.status(201).json(newFlashcard);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Getting all flashcards
router.get('/', async (req, res) => {
    try {
        const flashcards = await Flashcard.find();
        res.json(flashcards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting one flashcard
router.get('/:id', getFlashcard, (req, res) => {
    res.json(res.flashcard);
});

// Updating flashcard
router.patch('/:id', getFlashcard, async (req, res) => {
    if (req.body.prompt != null) {
        res.flashcard.prompt = req.body.prompt;
    }
    if (req.body.answer != null) {
        res.flashcard.answer = req.body.answer;
    }

    try {
        const updatedFlashcard = await res.flashcard.save();
        res.json(updatedFlashcard);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting flashcard
router.delete('/:id', getFlashcard, async (req, res) => {
    try {
        await res.flashcard.remove();
        res.json({ message: 'Deleted flashcard' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Helper function get a specific flashcard by ID
async function getFlashcard(req, res, next) {
    let flashcard;
    try {
        flashcard = await Flashcard.findById(req.params.id);
        if (flashcard == null) {
            return res.status(404).json({ message: 'Cannot find flashcard' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.flashcard = flashcard;
    next();
}

module.exports = router;