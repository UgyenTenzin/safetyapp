const mongoose = require('mongoose');

const hazardSchema = new mongoose.Schema({
    hazardType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    dateReported: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Hazard', hazardSchema);
