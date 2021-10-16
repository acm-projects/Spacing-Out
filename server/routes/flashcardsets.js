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

        // Save new flashcard set
        const newFlashcardSet = await flashcardSet.save();

        // Update each flashcards' parent reference
        newFlashcardSet.flashcards.forEach( async (flashcard) => {
            await updateFlashcardParent(flashcard._id, newFlashcardSet._id);
        })

        res.status(201).json(newFlashcardSet);
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Getting all flashcard sets
router.get('/', async (req, res) => {
    try {
        const flashcardSets = await FlashcardSet.find();
        res.json(flashcardSets);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one flash card set
router.get('/:id', getFlashcardSet, async (req, res) => {
    res.json(res.flashcardSet);
});

// Getting all flashcards from flashcard set
router.get('/:id/flashcards', getFlashcardSet, async (req, res) => {
    let flashcardList = [];
    try {
        const promises = res.flashcardSet.flashcards.map(id => {
            return Flashcard.findById(id);
        });
        flashcardList = await Promise.all(promises);
    }   
    catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.json(flashcardList);
});

// Updating flashcard set
router.patch('/:id', getFlashcardSet, async (req, res) => {
    // Update the name
    if (req.body.name != null) {
        res.flashcardSet.name = req.body.name;
    }
    // Update the description
    if (req.body.description != null) {
        res.flashcardSet.description = req.body.description;
    }

    // Append flashcards to the flashcard set
    if (req.body.flashcards != null) {

        req.body.flashcards.forEach( async (flashcard) => {
            
            // Make sure that the flashcard is not already in the set
            if (!res.flashcardSet.flashcards.includes(flashcard._id) && flashcard !== null) {
                // Append flashcard to the flashcard set
                res.flashcardSet.flashcards.push(flashcard._id);
                
                await updateFlashcardParent(flashcard._id, req.params.id);
                
            }
        });      
    }

    // Update the dateUpdated value to the current time
    res.flashcardSet.dateUpdated = new Date();

    try {
        const updatedFlashcardSet = await res.flashcardSet.save();
        res.json(updatedFlashcardSet);
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting flashcard set
router.delete('/:id', getFlashcardSet, async (req, res) => {
    try {
        await res.flashcardSet.remove();
        res.json({ message: 'Deleted flashcard set' });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Remove all flashcards from flashcard set
router.delete('/:id/flashcards/', getFlashcardSet, async (req, res) => {
    try {
        res.flashcardSet.flashcards = [];
        const updatedFlashcardSet = await res.flashcardSet.save();
        res.json(updatedFlashcardSet);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Removing flashcard from flashcard set
router.delete('/:id/flashcards/:flashcardId', getFlashcardSet, async (req, res) => {
    try {

        const flashcardList = res.flashcardSet.flashcards;

        if (flashcardList.includes(req.params.flashcardId)) {

            for( var i = 0; i < flashcardList.length; i++ ) { 
                
                if (flashcardList[i] == req.params.flashcardId) { 
                    
                    // Remove flashcard's reference to parent set
                    await updateFlashcardParent(flashcardList[i], null);
                    console.log('flashcard parent reference updated');

                    // Remove flashcard from the flashcard set
                    res.flashcardSet.flashcards.splice(i, 1); 
                }
            }
        }
        else {
            throw new Error('Flashcard is not in the flashcard set');
        }

        await res.flashcardSet.save();
        res.status(200).json({ message: 'Removed flashcard from flashcard set'});
    } 
    catch (err) {
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
    } 
    catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.flashcardSet = flashcardSet;
    next();
}

async function updateFlashcardParent(flashcardId, parentId) {
    // Update the flashcard's reference to parent set
    let flashcard;
    try {
        flashcard = await Flashcard.findById(flashcardId);
        if (flashcard == null) {
            return res.status(404).json({ message: 'Cannot find flashcard' });
        }
        
        flashcard.parent = parentId;
        await flashcard.save();

    } 
    catch (err) {
        return res.status(500).json({ message: err.message });
    } 
}

module.exports = router;