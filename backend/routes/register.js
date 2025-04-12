const express = require('express')
const Register = require('../models/registration_data');
const router = express.Router();



// Get all registered users
router.get('/', async (req, res) => {
    try {
        const users = await Register.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});





// Register a new user
router.post('/', async (req, res) => {
    try {
        const { name, email, password} = req.body;
        const newUser = new Register({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Validation error', details: err.message });
        }
        res.status(500).json({ error: 'Server error' });
    }
});




// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports=router;