const express = require('express')
const Food = require('../models/food_data');
const router = express.Router();

// Get all food items
router.get('/', async (req, res) => {
    try {
        const foodItems = await Food.find();
        res.status(200).json(foodItems);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Add a new food item
router.post('/', async (req, res) => {
    try {
        const { name, quantity, category, expirydate, description, pickupTime, storage } = req.body;
        const newFoodItem = new Food({ name, quantity, category, expirydate, description, pickupTime, storage });


        await newFoodItem.save();
        res.status(201).json({ message: 'Food item added successfully', foodItem: newFoodItem });
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Validation error', details: err.message });
        }
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;