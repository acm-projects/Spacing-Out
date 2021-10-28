const express = require('express');
const router = express.Router();
const Note = require('../models/note'); 
const Notebook = require('../models/notebook'); 

// Create a new note
router.post('/', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        body: req.body.body,
        wordCount: req.body.wordCount
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
    res.note.dateUpdated = new Date();

    try {
        const updatedNote = await res.note.save();
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

// Create a notebook

router.post("/notebook", async (req, res) => {
    const notebook = new Notebook({
        name: req.body.name,
        description: req.body.description,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        notes: req.body.notes
    });

    try {
        const newNotebook = await notebook.save();
        res.status(201).json(newNotebook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a notebook

router.get('/notebook/:id', getNotebook, async (req, res) => {
    res.json(notebook);
});

// Update a notebook

router.patch('/notebook/:id', getNotebook, async (req, res) => {
    if (req.body.name != null) {
        res.notebook.name = req.body.name;
    }
    if (req.body.description != null) {
        res.notebook.description = req.body.description;
    }
    if (req.body.dateUpdated != null) {
        res.notebook.dateUpdated = req.body.dateUpdated;
    } 
    if (req.body.dateCreated != null) {
        res.notebook.dateCreated = req.body.dateCreated;
    }
    if (req.body.notes != null) {
        res.notebook.notes = req.body.notes;
    }
    
    try {
        const updatedNotebook = await res.notebook.save();
        res.json(updatedNotebook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete notebook

router.delete('/notebook/:id', getNotebook, async (req, res) => {
    try {
        await res.notebook.remove();
        res.json({ message: 'Deleted notebook' });
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

async function getNotebook(req, res, next) {
    let notebook;
    try {
        notebook = await Notebook.findById(req.params.id);
        if (notebook == null) {
            return res.status(404).json({ message: 'Cannot find notebook' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.notebook = notebook;
    next();
}


module.exports = router;