const Donation = require("../models/Donation");

const getDonationDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donation.findByPk(id);
    if (!donation) {
      return res.status(404).json({ error: "Donation not found" });
    }
    res.status(200).json(donation);
  } catch (error) {
    console.error("Error fetching donation details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getDonationDetails };
