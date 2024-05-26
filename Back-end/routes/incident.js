// incidents.js
const express = require("express");
const router = express.Router();
const incidentsController = require("../controllers/incidentController");

// Report incident route
router.post("/report", incidentsController.reportIncident);

module.exports = router;
