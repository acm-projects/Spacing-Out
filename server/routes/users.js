var express = require('express');
var router = express.Router();

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
        const doesUserExist = await User.exists({ username: req.body.username });
        if (doesUserExist) {
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

  // login route
  router.post("/login", async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ username: body.username });
    if (user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
        res.status(200).json({ validated: true, message: "Valid password" });
      } else {
        res.status(400).json({ validated: false, error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ validated: false, error: "User does not exist" });
    }
  });

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

module.exports = router;
