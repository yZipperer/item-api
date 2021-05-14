const fruitData = require('../data/food/fruit.json');
const cannedData = require('../data/food/canned.json');
const dryGoodsData = require('../data/food/dryGoods.json');
const dairData = require("../data/food/dairy.json");

exports.allFood = (req, res) => {
    const allFood = [fruitData, cannedData, dryGoodsData];
    return res.status(200).json(allFood);
};

exports.allFruit = (req, res) => {
    return res.status(200).json(fruitData);
};

exports.allCanned = (req, res) => {
    return res.status(200).json(cannedData);
};

exports.allDryGoods = (req, res) => {
    return res.status(200).json(dryGoodsData);
};

exports.allDairy = (req, res) => {
    return res.status(200).json(dairData);
}