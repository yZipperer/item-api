const express = require("express");
const router = express.Router();

const {
    everything,
    fruit
} = require("../controllers/food.js");

router.get("/food", everything);
router.get("/food/fruit", fruit);

module.exports = router;