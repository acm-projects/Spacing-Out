const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const bcrypt = require('bcrypt');

// Create a new user
router.post('/', async (req, res) => {
  const user = new User({
      username: req.body.username,
      password: req.body.password
  });

  try {
      const newUser = await user.save();
      res.status(201).json(newUser);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

router.post('/create', async (req, res) => {
    try {
        if (User.find({ username: req.body.username }).length > 0) {
            throw new Error('Username already exists');
        }
        bcrypt.hash(req.body.password, 10, async function (err, hash) {
            console.log(hash)
            const user = new User({
                username: req.body.username,
                password: hash
            });

            const newUser = await user.save();
            res.status(201).json(newUser);
            });
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  });
  
  router.post('/create', async (req, res) => {
    try {
        if (User.find({ username: req.body.username }).length > 0) {
            throw new Error('Username already exists');
        }
        bcrypt.hash(req.body.password, 10, async function (err, hash) {
            console.log(hash)
            const user = new User({
                username: req.body.username,
                password: hash
            });

            const newUser = await user.save();
            res.status(201).json(newUser);
            });
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  });

  // Add post request for login

// Getting all users
router.get('/', async (req, res) => {
  try {
      const users = await User.find();
      res.json(users);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// Getting one user
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});


// Update a username
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.username != null) {
      res.user.username = req.body.username;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
}

  try {
      const updatedUser = await res.user.save();
      res.json(updatedUser);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// Delete a user
router.delete('/:id', getUser, async (req, res) => {
  try {
      await res.user.remove();
      res.json({ message: 'Your account has been deleted.' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
      user = await User.findById(req.params.id);
      if (user == null) {
          return res.status(404).json({ message: 'Cannot find user' });
      }
  } catch (err) {
      return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;