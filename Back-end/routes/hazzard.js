// hazards.js
const express = require("express");
const router = express.Router();
const hazardsController = require("../controllers/hazardsController");

// Report hazard route
router.post("/report", hazardsController.reportHazard);

module.exports = router;
