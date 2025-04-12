const express = require('express')
const Register = require('../models/registration_data');
const router = express.Router();

// Login a user
router.post('/', async (req, res) => {
    try {
        // Extract email and password from request body
        const { email, password } = req.body;
        const users = await Register.find({ email, password });

        //matching the given email and password with the database
        


        
    
        // Check if user exists
        if (users.length > 0) {
            res.status(200).json({ message: 'Login successful', user: users[0] });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
            alert("Invalid email or password")
        }

    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Validation error', details: err.message });
        }
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports=router;