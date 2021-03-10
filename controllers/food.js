const data = require('../data.json');

exports.allFruits = (req, res) => {
    return res.status(200).json(data.food.fruits);
};

exports.fruit = (req, res) => {
    return res.status(200).json(data.food.fruits);
};