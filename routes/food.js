const express = require("express");
const router = express.Router();

const {
    allFood,
    allFruit
} = require("../controllers/food.js");

router.get("/food", allFood);
router.get("/food/fruit", allFruit);

module.exports = router;