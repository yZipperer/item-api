const data = require('../data/data.json');

exports.allData = (req, res) => {
    return res.status(200).json(data);
};

exports.allFood = (req, res) => {
    return res.status(200).json(data);
};