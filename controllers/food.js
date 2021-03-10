const fruitData = require('../data/food/fruit.json');

exports.allFood = (req, res) => {
    const allFood = [fruitData]
    return res.status(200).json(allFood);
};

exports.allFruit = (req, res) => {
    return res.status(200).json(fruitData);
};