const express = require("express");
const router = express.Router();
const sampleController = require("../controllers/sampleController");

// Sample route
router.get("/sample", sampleController.getSample);

module.exports = router;
