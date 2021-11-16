# API
## Notes
### GET All Notes
```
GET /notes
-> 
{
  title,
  body,
  wordCount,
  dateCreated,
  dateUpdated,
  username,
  _id,
  __v
}
```
### GET One Note
```
GET /notes/:id
-> 
{
  title,
  body,
  wordCount,
  dateCreated,
  dateUpdated,
  username,
  _id,
  __v
}
```
### POST Note
```
POST /notes
{
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    wordCount: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    },
    dateUpdated: {
        type: Date,
        required: true
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
}
-> 
{
  title,
  body,
  wordCount,
  dateCreated,
  dateUpdated,
  username,
  _id,
  __v
}
```
### PATCH (Update) Note
```
PATCH /notes/:id
{
    title: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    },
    wordCount: {
        type: Number,
        required: false
    }
}
-> 
{
  title,
  body,
  wordCount,
  dateCreated,
  dateUpdated,
  username,
  _id,
  __v
}
```
### DELETE One Note
```
DELETE /notes/:id
-> 
{
  message
}
```
## Notebooks
### GET All Notebooks
```
GET /notebooks
-> 
{
  name,
  description,
  dateCreated,
  dateUpdated,
  username,
  _id,
  notes,
  __v
}
```
### GET One Notebook
```
GET /notebooks/:id
-> 
{
  name,
  description,
  dateCreated,
  dateUpdated,
  username,
  _id,
  notes,
  __v
}
```
### POST Notebook
```
POST /notebooks
{
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    },
    dateUpdated: {
        type: Date,
        required: true
    },
    notes: [],
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
}
-> 
{
  name,
  description,
  dateCreated,
  dateUpdated,
  username,
  _id,
  notes,
  __v
}
```
### PATCH (Update) Notebook
```
PATCH /notes/:id
{
    name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        required: true
    },
    // check whether this notes patch is in correct format
    notes: []
}
-> 
{
  name,
  description,
  dateCreated,
  dateUpdated,
  username,
  _id,
  notes,
  __v
}
```
### DELETE One Notebook
```
DELETE /notebooks/:id
-> 
{
  message
}
```
### DELETE One Note from a Notebook
```
DELETE /notebooks/:id/notes/:noteId
-> 
{
  message
}
```
## Flashcards
### GET All Flashcards
```
GET /flashcards
-> 
{
  [
    front,
    back,
    parent,
    interval,
    repetition,
    efactor,
    dueDate,
    _id,
    __v
  ]
}
```
### GET One Flashcard
```
GET /flashcards/:id
-> 
{
  front,
  back,
  parent,
  interval,
  repetition,
  efactor,
  dueDate,
  _id,
  __v
}
```
### GET All Flashcards that are Due
##### Gets all flashcards that are due on or before the specified date.
##### If the date is not specified, all flashcards that are due on the current date or before are returned.
```
GET /flashcards/due?date=YYYY-MM-DD
->
{
  [
    front,
    back,
    parent,
    interval,
    repetition,
    efactor,
    dueDate,
    _id,
    __v
  ]
}
```
### POST Flashcard
```
POST /flashcards
{
    prompt: {
        type: String,
        required: false
    },
    answer: {
        type: String,
        required: false
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FlashcardSet',
        required: false
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }
}
-> 
{
  front,
  back,
  parent,
  interval,
  repetition,
  efactor,
  dueDate,
  _id,
  __v
}
```
### PATCH (Update) Flashcard
```
PATCH /flashcards/:id
{
    prompt: {
        type: String,
        required: false
    },
    answer: {
        type: String,
        required: false
    }
}
-> 
{
  front,
  back,
  parent,
  interval,
  repetition,
  efactor,
  dueDate,
  _id,
  __v
}
```
### PATCH (Practice) Flashcard
##### Grade is a positive integer between 1 and 5, where 1 is the worst and 5 is the best.
```
PATCH /flashcards/practice/:id?grade=
->
{
  front,
  back,
  parent,
  interval,
  repetition,
  efactor,
  dueDate,
  _id,
  __v
}
```
### DELETE One Flashcard
```
DELETE /flashcards/:id
-> 
{
  message
}
```
## Flashcard Sets
### GET All Flashcard Sets
```
GET /flashcardsets
-> 
{
  name,
  description,
  dateCreated,
  dateUpdated,
  flashcards,
  username,
  _id,
  __v
}
```
### GET One Flashcard Set
```
GET /flashcardsets/:id
-> 
{
  name,
  description,
  dateCreated,
  dateUpdated,
  flashcards,
  username,
  _id,
  __v
}
```
### POST Flashcard Set
```
POST /flashcardsets
{
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        required: true
    },
    dateUpdated: {
        type: Date,
        required: true
    },
    flashcards: [],
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
}
-> 
{
  name,
  description,
  dateCreated,
  dateUpdated,
  flashcards,
  username,
  _id,
  __v
}
```
### PATCH Flashcard Set
```
PATCH /flashcardsets/:id
{
    name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    flashcards: []
}
-> 
{
  name,
  description,
  dateCreated,
  dateUpdated,
  flashcards,
  username,
  _id,
  __v
}
```
### DELETE One Flashcard Set
```
DELETE /flashcardsets/:id
-> 
{
  message
}
```
### DELETE All Flashcards From a Flashcard Set
```
DELETE /flashcardsets/:id/flashcards/
-> 
{
  name,
  description,
  dateCreated,
  dateUpdated,
  flashcards,
  username,
  _id,
  __v
}
```
### DELETE One Flashcard From a Flashcard Set
```
DELETE /flashcardsets/:id/flashcards/:flashcardId
-> 
{
  message
}
```
## Users
// Need to add user requests
