const fruitData = require('../data/food/fruit.json');
const cannedData = require('../data/food/canned.json');

exports.allFood = (req, res) => {
    const allFood = [fruitData, cannedData];
    return res.status(200).json(allFood);
};

exports.allFruit = (req, res) => {
    return res.status(200).json(fruitData);
};

exports.allCanned = (req, res) => {
    return res.status(200).json(cannedData);
};