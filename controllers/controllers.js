const UnitedStatesData = require('../data/United States/data.json');
const UnitedStatesStatsTemplate = require('../data/United States/statsTemplate.json');
const JapanData = require('../data/Japan/data.json');
const JapanStatsTemplate = require('../data/Japan/statsTemplate.json');

const allData = {
    "US": UnitedStatesData,
    "JP": JapanData
}

exports.allData = (req, res) => {
    return res.status(200).json(allData);
};

exports.food = (req, res) => {
    const category = req.query.cat || "none";
    const brand = req.query.brand || "none";
    const result = [];
    
    const country = req.params.country;

    if (country === "US") {
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
    } else if (country === "JP") {
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
    let result = null;
    const country = req.query.country || "none";

    if (country === "US") {
        result = UnitedStatesStatsTemplate;
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
    } else if (country === "JP") {
        result = JapanStatsTemplate;
        for (const item in JapanData) {
            if (Array.isArray(JapanData[item].category) === false){
                const tempCat = JapanData[item].category;
                
                if (result.numByCat[tempCat] === 0){
                    result.numOfCats += 1;
                }
                result.numByCat[tempCat] += 1;
            } else if (Array.isArray(JapanData[item].category) === true){
                for (const index in JapanData[item].category){
                    const tempCat = JapanData[item].category[index];
                    
                    if (result.numByCat[tempCat] === 0){
                        result.numOfCats += 1;
                    }
                    result.numByCat[tempCat] += 1;
                }
            }
        }
    }
    
    return res.status(200).json(result);
};