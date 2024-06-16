const express = require('express');
const router = express.Router();
const {
    getHazards,
    getHazardById,
    createHazard,
    updateHazard,
    deleteHazard
} = require('../controllers/hazardController');

// Define routes
router.route('/')
    .get(getHazards)
    .post(createHazard);

router.route('/:id')
    .get(getHazardById)
    .put(updateHazard)
    .delete(deleteHazard);

module.exports = router;
