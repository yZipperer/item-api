const express = require("express");
const router = express.Router();

const {
    food,
    allData,
    stats
} = require("../controllers/controllers.js");

router.get("/", allData);
router.get("/food/", food);
router.get("/stats/", stats);

module.exports = router;