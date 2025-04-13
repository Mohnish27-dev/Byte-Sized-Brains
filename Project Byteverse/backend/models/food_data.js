const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    category: {
        type: String,
        required: true,
    },
    expirydate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    pickupTime: {
        type: String,
        required: true
    },
    storage: {
        type: String,
        required: true
    }
});


module.exports=mongoose.model('FoodData', foodSchema);