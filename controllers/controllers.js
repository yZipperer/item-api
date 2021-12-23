const data = require('../data/data.json');
const statsTemplate = require('../data/masterStatsTemplate.json');

const codeConversion = {
    "US": "United States",
    "JP": "Japan"
}

exports.allData = (req, res) => {
    return res.status(200).json(data);
};

exports.food = (req, res) => {
    const category = req.query.cat || "none";
    const brand = req.query.brand || "none";
    const result = [];
    
    const country = req.query.country;
    console.log(country, brand, category)

    if(country != undefined) {
        if(category === "none" && brand != "none") {
            for (const item in data) {
                if (data[item].brand === brand && data[item].country === codeConversion[country]){
                    result.push(data[item]);
                } else if (data[item].brand.includes(brand) && data[item].country.includes(codeConversion[country])){
                    result.push(data[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(brand === "none" && category != "none") {
            for (const item in data) {
                if (data[item].category === category && data[item].country === codeConversion[country]){
                    result.push(data[item]);
                } else if (data[item].category.includes(category) && data[item].country.includes(codeConversion[country])){
                    result.push(data[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(brand != "none" && category != "none") {
            for (const item in data) {
                if (data[item].brand === brand && data[item].category === category && data[item].country === codeConversion[country]){
                    result.push(data[item]);
                } else if (data[item].brand.includes(brand) && data[item].category.includes(category) && data[item].country.includes(codeConversion[country])){
                    result.push(data[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(category === "none" && brand === "none") {
            for (const item in data) {
                if (data[item].country === codeConversion[country]){
                    result.push(data[item]);
                } else if (data[item].country.includes(codeConversion[country])){
                    result.push(data[item]);
                }
            }
            return res.status(200).json(result);
        }
    } else {
        if(category === "none" && brand != "none") {
            for (const item in data) {
                if (data[item].brand === brand){
                    result.push(data[item]);
                } else if (data[item].brand.includes(brand)){
                    result.push(data[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(brand === "none" && category != "none") {
            for (const item in data) {
                if (data[item].category === category){
                    result.push(data[item]);
                } else if (data[item].category.includes(category)){
                    result.push(data[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(brand != "none" && category != "none") {
            for (const item in data) {
                if (data[item].brand === brand && data[item].category === category){
                    result.push(data[item]);
                } else if (data[item].brand.includes(brand) && data[item].category.includes(category)){
                    result.push(data[item]);
                }
            }
            return res.status(200).json(result);
        }
        else if(category === "none" && brand === "none") {
            return res.status(200).json(data);
        }
    }
    
};

exports.stats = (req, res) => {
    let parseResult = [];
    let result = statsTemplate;
    const country = req.query.country;
    console.log(country)

    if (country != undefined) {
        for (const item in data) {
            if (data[item].country === codeConversion[country]){
                parseResult.push(data[item]);
            } else if (data[item].country.includes(codeConversion[country])){
                parseResult.push(data[item]);
            }
        }

        for (const item in parseResult) {
            if (Array.isArray(parseResult[item].category) === false){
                const tempCat = parseResult[item].category;
                
                if (result.numByCat[tempCat] === 0){
                    result.numOfCats += 1;
                }
                result.numByCat[tempCat] += 1;
            } else if (Array.isArray(parseResult[item].category) === true){
                for (const index in parseResult[item].category){
                    const tempCat = parseResult[item].category[index];
                    
                    if (result.numByCat[tempCat] === 0){
                        result.numOfCats += 1;
                    }
                    result.numByCat[tempCat] += 1;
                }
            }
        }
        console.log(result.numOfCats, result.numByCat)
        return res.status(200).json(result);
    } else {
        for (const item in data) {
            if (Array.isArray(data[item].category) === false){
                const tempCat = data[item].category;
                
                if (result.numByCat[tempCat] === 0){
                    result.numOfCats += 1;
                }
                result.numByCat[tempCat] += 1;
            } else if (Array.isArray(data[item].category) === true){
                for (const index in data[item].category){
                    const tempCat = data[item].category[index];
                    
                    if (result.numByCat[tempCat] === 0){
                        result.numOfCats += 1;
                    }
                    result.numByCat[tempCat] += 1;
                }
            }
        }

        return res.status(200).json(result);
    }

};