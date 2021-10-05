const express = require('express');
const router = express.Router();
const Note = require('../models/note'); 

// Create a new note
router.post('/', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        body: req.body.body,
        creator: req.body.creator,
        wordCount: req.body.wordCount,
        dateCreated: req.body.dateCreated,
        dateUpdated: req.body.dateUpdated
    });

    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Getting all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting one note
router.get('/:id', getNote, (req, res) => {
    res.json(res.note);
});


// Update a note
router.patch('/:id', getNote, async (req, res) => {
    if (req.body.title != null) {
        res.note.title = req.body.title;
    }
    if (req.body.body != null) {
        res.note.body = req.body.body;
    }
    res.note.dateUpdated = req.body.dateUpdated;
    res.note.wordCount = req.body.wordCount;

    try {
        const updatedNote= await res.note.save();
        res.json(updatedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a note
router.delete('/:id', getNote, async (req, res) => {
    try {
        await res.note.remove();
        res.json({ message: 'Deleted note' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getNote(req, res, next) {
    let note;
    try {
        note = await Note.findById(req.params.id);
        if (note == null) {
            return res.status(404).json({ message: 'Cannot find note' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.note = note;
    next();
}

module.exports = router;