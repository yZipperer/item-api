const data = require('../data.json');

exports.everything = (req, res) => {
    return res.status(200).json(data);
};

exports.fruit = (req, res) => {
    return res.status(200).json(data.food.fruits);
};