const express = require("express");
const router = express.Router();

const {
    allFood,
    allData,
} = require("../controllers/controllers.js");

router.get("/", allData);
router.get("/food", allFood);

module.exports = router;