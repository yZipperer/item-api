const UnitedStatesData = require('../data/United States/data.json');
const JapanData = require('../data/Japan/data.json');
const statsTemplate = require('../data/United States/statsTemplate.json');

exports.allData = (req, res) => {
    allData = {
        "United States": UnitedStatesData,
        "Japan": JapanData
    }

    return res.status(200).json(allData);
};

exports.food = (req, res) => {
    const category = req.query.cat || "none";
    const brand = req.query.brand || "none";
    const result = [];
    
    const country = req.params.country;

    if (country === "United States") {
        if(category === "none" && brand != "none") {
            for (const item in UnitedStatesData) {
                if (UnitedStatesData[item].brand === brand){
                    result.push(UnitedStatesData[item]);
                } else if (UnitedStatesData[item].brand.includes(brand)){
                    result.push(UnitedStatesData[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(brand === "none" && category != "none") {
            for (const item in UnitedStatesData) {
                if (UnitedStatesData[item].category === category){
                    result.push(UnitedStatesData[item]);
                } else if (UnitedStatesData[item].category.includes(category)){
                    result.push(UnitedStatesData[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(brand != "none" && category != "none") {
            for (const item in UnitedStatesData) {
                if (UnitedStatesData[item].brand === brand && UnitedStatesData[item].category === category){
                    result.push(UnitedStatesData[item]);
                } else if (UnitedStatesData[item].brand.includes(brand) && UnitedStatesData[item].category.includes(category)){
                    result.push(UnitedStatesData[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(category === "none" && brand === "none") {
            return res.status(200).json(UnitedStatesData);
        }
    } else if (country === "Japan") {
        if(category === "none" && brand != "none") {
            for (const item in JapanData) {
                if (JapanData[item].brand === brand){
                    result.push(JapanData[item]);
                } else if (JapanData[item].brand.includes(brand)){
                    result.push(JapanData[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(brand === "none" && category != "none") {
            for (const item in JapanData) {
                if (JapanData[item].category === category){
                    result.push(JapanData[item]);
                } else if (JapanData[item].category.includes(category)){
                    result.push(JapanData[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(brand != "none" && category != "none") {
            for (const item in JapanData) {
                if (JapanData[item].brand === brand && JapanData[item].category === category){
                    result.push(JapanData[item]);
                } else if (JapanData[item].brand.includes(brand) && JapanData[item].category.includes(category)){
                    result.push(JapanData[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(category === "none" && brand === "none") {
            return res.status(200).json(JapanData);
        }
    }
    
};

exports.stats = (req, res) => {
    const result = statsTemplate;
    for (const item in UnitedStatesData) {
        if (Array.isArray(UnitedStatesData[item].category) === false){
            const tempCat = UnitedStatesData[item].category;
            
            if (result.numByCat[tempCat] === 0){
                result.numOfCats += 1;
            }
            result.numByCat[tempCat] += 1;
        } else if (Array.isArray(UnitedStatesData[item].category) === true){
            for (const index in UnitedStatesData[item].category){
                const tempCat = UnitedStatesData[item].category[index];
                
                if (result.numByCat[tempCat] === 0){
                    result.numOfCats += 1;
                }
                result.numByCat[tempCat] += 1;
            }
        }
    }
    return res.status(200).json(result);
};