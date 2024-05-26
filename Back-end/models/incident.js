// Incident.js
const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Incident", incidentSchema);
