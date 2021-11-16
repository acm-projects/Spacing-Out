const express = require('express');
const router = express.Router();
const Note = require('../models/note'); 
const Notebook = require('../models/notebook'); 

// Create a new note
router.post('/', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        body: req.body.body,
        wordCount: req.body.wordCount,
        username: req.body.username
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
    if (req.body.time != null) {
        res.note.time = req.body.time;
    }
    if (req.body.blocks != null) {
        res.note.blocks = req.body.blocks;
    }
    if (req.body.version != null) {
        res.note.version = req.body.version;
    }
    if (req.body.wordCount != null) {
        res.note.wordCount = req.body.wordCount;
    }
    res.note.dateUpdated = new Date();
    
    try {
        const updatedNote = await res.note.save();
        console.log(updatedNote);
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