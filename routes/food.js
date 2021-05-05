const express = require("express");
const router = express.Router();

const {
    allFood,
    allFruit,
    allCanned
} = require("../controllers/food.js");

router.get("/food", allFood);
router.get("/food/fruit", allFruit);
router.get("/food/canned", allCanned);

module.exports = router;