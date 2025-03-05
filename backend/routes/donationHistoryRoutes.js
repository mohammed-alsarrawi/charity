const express = require("express");
const router = express.Router();
const historyDetailsController = require("../controllers/historyDetailsController");

// GET /api/donationHistory/:id - fetch donation details by ID
router.get("/:id", historyDetailsController.getDonationDetails);

module.exports = router;
