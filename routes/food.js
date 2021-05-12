const express = require("express");
const router = express.Router();

const {
    allFood,
    allFruit,
    allCanned,
    allDryGoods
} = require("../controllers/food.js");

router.get("/food", allFood);
router.get("/food/fruit", allFruit);
router.get("/food/canned", allCanned);
router.get("/food/drygoods", allDryGoods);

module.exports = router;