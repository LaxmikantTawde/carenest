const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    calories: {
        type: Number,
        required: true
    },
    servingSize: {
        type: String,
        required: true,
        trim: true
    },
    protein: {
        type: Number,
        required: true
    },
    vitamins: {
        type: String,
        trim: true
    },
    fats: {
        type: Number,
        required: true
    },
    foodId: {
        type: String,
        unique: true,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Food', foodSchema);
