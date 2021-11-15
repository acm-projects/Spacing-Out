const express = require('express');
const router = express.Router();
const Flashcard = require('../models/flashcard'); 
const FlashcardSet = require('../models/flashcardset');
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat);
const supermemo = require('../supermemo');

// Creating flashcard
router.post('/', async (req, res) => {
    const flashcard = new Flashcard({
<<<<<<< HEAD
        front: req.body.front,
        back: req.body.back,
        parent: req.body.parent,
        dueDate: req.body.dueDate
=======
        prompt: req.body.prompt,
        answer: req.body.answer,
        username: req.body.username
>>>>>>> 5b92fe9 (new user branch w/ encryption (no de-encryption))
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
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET url/flashcards/due?date=YYYY-MM-DD
// Getting all flashcards that are due on or before the specified date
// If the date is not specified, all flashcards that are due today or before are returned
router.get('/due', async (req, res) => {
    try {
        let flashcards;

        if (typeof req.query.date === 'undefined') {

            flashcards = await Flashcard.find({ dueDate: { $lte: dayjs(Date.now()) } });
        }
        else {

            let due = dayjs(req.query.date, 'YYYY-MM-DD', true);
            due = due.add(1, 'day');
            
            if (!due.isValid()) {
                throw new Error('Date in query is not valid');
            }

            flashcards = await Flashcard.find({ dueDate: { $lte: due } });
        }
        
        res.json(flashcards);

    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting one flashcard
router.get('/:id', getFlashcard, (req, res) => {
    res.json(res.flashcard);
});

// Updating flashcard
router.patch('/:id', getFlashcard, async (req, res) => {
    if (req.body.front != null) {
        res.flashcard.front = req.body.front;
    }
    if (req.body.back != null) {
        res.flashcard.back = req.body.back;
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

// Updating the spaced-repetition algorithm after flashcard has been practiced
router.patch('/practice/:id', getFlashcard, async (req, res) => {
    
    const {nextInterval, nextRepetition, nextEfactor} = supermemo(res.flashcard, Number(req.query.grade));
    
    res.flashcard.interval = nextInterval;
    res.flashcard.repetition = nextRepetition;
    res.flashcard.efactor = nextEfactor;
    res.flashcard.dueDate = dayjs(Date.now()).add(res.flashcard.interval, 'day').toISOString();

    try {
        const updatedFlashcard = await res.flashcard.save();
        res.json(updatedFlashcard);
    } catch (err) {
        res.status(400).json({ message: err.message });
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