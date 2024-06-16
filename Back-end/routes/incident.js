const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

// Create a new incident
router.post('/report', async (req, res) => {
    try {
        const { title, description, location } = req.body;
        const newIncident = new Incident({
            title,
            description,
            location
        });
        await newIncident.save();
        res.status(201).json({ message: 'Incident reported successfully' });
    } catch (error) {
        console.error('Error reporting incident:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get all incidents
router.get('/all', async (req, res) => {
    try {
        const incidents = await Incident.find();
        res.status(200).json(incidents);
    } catch (error) {
        console.error('Error fetching incidents:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
