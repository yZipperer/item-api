const data = require('../data/data.json');

exports.allData = (req, res) => {
    return res.status(200).json(data);
};

exports.food = (req, res) => {
    const category = req.query.cat || "none";
    const brand = req.query.brand || "none";
    const result = [];
    if(category === "none" && brand != "none") {
        for (const item in data) {
            console.log(item);
            console.log("brand: ", data[item].brand);
            if (data[item].brand === brand){
                console.log("found");
                result.push(data[item]);
            }
        }
        return res.status(200).json(result);
    }
    else if(brand === "none" && category != "none") {
        for (const item in data) {
            if (data[item].category === category){
                console.log("found");
                result.push(data[item]);
            }
        }
        return res.status(200).json(result);
    }
    else if(category === "none" && brand === "none"){
        return res.status(200).json(data);
    }
    
};