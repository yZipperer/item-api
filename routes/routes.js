const express = require("express");
const router = express.Router();

const {
    food,
    allData,
} = require("../controllers/controllers.js");

router.get("/", allData);
router.get("/food", food);

module.exports = router;