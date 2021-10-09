const express = require('express');
const router = express.Router();
const Flashcard = require('../models/flashcard'); 
const FlashcardSet = require('../models/flashcardset');

// Create new flashcard set
router.post("/", async (req, res) => {
    const flashcardSet = new FlashcardSet({
        name: req.body.name,
        description: req.body.description,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        flashcards: req.body.flashcards
    });

    try {
        const newFlashcardSet = await flashcardSet.save();
        res.status(201).json(newFlashcardSet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Getting all flashcard sets
router.get('/', async (req, res) => {
    try {
        const flashcardSets = await FlashcardSet.find();
        res.json(flashcardSets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one flash card set
router.get('/:id', getFlashcardSet, async (req, res) => {
    res.json(res.flashcardSet);
});

// Getting all flashcards from flashcard set
router.get('/:id/flashcards', getFlashcardSet, async (req, res) => {
    res.json(res.flashcardSet.flashcards);
});

// Updating flashcard set
router.patch('/:id', getFlashcardSet, async (req, res) => {
    if (req.body.name != null) {
        res.flashcardSet.name = req.body.name;
    }
    if (req.body.description != null) {
        res.flashcardSet.description = req.body.description;
    }
    if (req.body.flashcards != null) {
        req.body.flashcards.forEach( (flashcard) => {
            if (!res.flashcardSet.flashcards.includes(flashcard._id) && flashcard != null) {
                res.flashcardSet.flashcards.push(flashcard._id);
            }    
        });
    }
    res.flashcardSet.dateUpdated = new Date();

    try {
        const updatedFlashcardSet = await res.flashcardSet.save();
        res.json(updatedFlashcardSet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting flashcard set
router.delete('/:id', getFlashcardSet, async (req, res) => {
    try {
        await res.flashcardSet.remove();
        res.json({ message: 'Deleted flashcard set' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Deleting flashcard from flashcard set
router.delete('/:id/flashcards/:flashcardId', getFlashcardSet, async (req, res) => {
    try {
        // Still not working yet
        res.flashcardSet.flashcards = res.flashcardSet.flashcards.filter(item => item !== req.params.flashcardId);
        res.json({ message: 'Deleted flashcard '+req.params.flashcardId+' in flashcard set' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Helper function to get a specific flashcard set by ID
async function getFlashcardSet(req, res, next) {
    let flashcardSet;
    try {
        flashcardSet = await FlashcardSet.findById(req.params.id);
        if (flashcardSet == null) {
            return res.status(404).json({ message: 'Cannot find flashcard set' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.flashcardSet = flashcardSet;
    next();
}

module.exports = router;