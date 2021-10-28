const express = require('express');
const router = express.Router();
const Note = require('../models/note'); 
const Notebook = require('../models/notebook'); 

// Create a notebook

router.post("/", async (req, res) => {
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

router.get('/:id', getNotebook, async (req, res) => {
    res.json(notebook);
});

// Get all notebooks

router.get('/', async (req, res) => {
    try {
        const notebooks = await Notebook.find();
        res.json(notebooks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting all notes from a notebook
router.get('/:id/notes', getNotebook, async (req, res) => {
    res.json(res.notebook.notes);
});

// Update a notebook

router.patch('/:id', getNotebook, async (req, res) => {
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
        req.body.notes.forEach( (note) => {
            if (!res.notebook.notes.includes(note._id) && note != null) {
                res.notebook.notes.push(note._id);
            }    
        });
    }
    res.notebook.dateUpdated = new Date();
    
    try {
        const updatedNotebook = await res.notebook.save();
        res.json(updatedNotebook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete notebook

router.delete('/:id', getNotebook, async (req, res) => {
    try {
        await res.notebook.remove();
        res.json({ message: 'Deleted notebook' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Deleting a note from a notebook
router.delete('/:id/notes/:noteId', getNotebook, async (req, res) => {
    try {
        // Still not working yet
        res.notebook.notes = res.notebook.notes.filter(item => item !== req.params.noteId);
        res.json({ message: 'Deleted note '+req.params.noteId+' in notebook' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

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