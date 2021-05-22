const express = require("express");
const router = express.Router();

const {
    allFood,
    allFruit,
    allCanned,
    allDryGoods,
    allDairy,
    allBakery,
    allCookies
} = require("../controllers/food.js");

router.get("/food", allFood);
router.get("/food/fruit", allFruit);
router.get("/food/canned", allCanned);
router.get("/food/drygoods", allDryGoods);
router.get("/food/dairy", allDairy);
router.get("/food/bakery", allBakery);
router.get("/food/cookies", allCookies)

module.exports = router;