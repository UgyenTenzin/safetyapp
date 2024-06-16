const Hazard = require('../models/Hazard');

// Get all hazards
const getHazards = async (req, res) => {
    try {
        const hazards = await Hazard.find();
        res.json(hazards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get hazard by ID
const getHazardById = async (req, res) => {
    try {
        const hazard = await Hazard.findById(req.params.id);
        if (!hazard) return res.status(404).json({ message: 'Hazard not found' });
        res.json(hazard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new hazard
const createHazard = async (req, res) => {
    const hazard = new Hazard(req.body);
    try {
        const newHazard = await hazard.save();
        res.status(201).json(newHazard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a hazard
const updateHazard = async (req, res) => {
    try {
        const hazard = await Hazard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!hazard) return res.status(404).json({ message: 'Hazard not found' });
        res.json(hazard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a hazard
const deleteHazard = async (req, res) => {
    try {
        const hazard = await Hazard.findByIdAndDelete(req.params.id);
        if (!hazard) return res.status(404).json({ message: 'Hazard not found' });
        res.json({ message: 'Hazard deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getHazards,
    getHazardById,
    createHazard,
    updateHazard,
    deleteHazard
};
