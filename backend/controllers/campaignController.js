// backend/controllers/campaignController.js
const Campaign = require('../models/Campaign');

// Get all campaigns
const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate('createdBy', 'username');
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = { getCampaigns };