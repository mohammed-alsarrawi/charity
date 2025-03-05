const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary"); // Import Cloudinary config

// Configure Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "beneficiaries", // Folder in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) =>
      `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`,
  },
});

// Initialize Multer
const upload = multer({ storage });

module.exports = upload;
