// hazardsController.js
const Hazard = require("../models/Hazard");

exports.reportHazard = async (req, res) => {
    try {
        const { type, description, location } = req.body;
        // Create new hazard
        const newHazard = new Hazard({ type, description, location });
        await newHazard.save();
        res.status(201).json({ message: "Hazard reported successfully" });
    } catch (error) {
        console.error("Error reporting hazard:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
