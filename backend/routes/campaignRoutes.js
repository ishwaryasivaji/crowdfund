// backend/routes/campaignRoutes.js
const express = require('express');
const { getCampaigns } = require('../controllers/campaignController');
const router = express.Router();

// Get all campaigns
router.get('/', getCampaigns);

module.exports = router;