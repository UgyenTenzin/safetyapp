// incidentsController.js
const Incident = require("../models/Incident");

exports.reportIncident = async (req, res) => {
    try {
        const { type, description, location } = req.body;
        // Create new incident
        const newIncident = new Incident({ type, description, location });
        await newIncident.save();
        res.status(201).json({ message: "Incident reported successfully" });
    } catch (error) {
        console.error("Error reporting incident:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
