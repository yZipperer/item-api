const express = require("express");
const app = express();
const mainData = require("./data/data.json");
const docs = require("./docs.json");

const food = require("./routes/food");
app.use("/", food);

app.use(express.static(__dirname + '/images'));

app.get("/", (req, res) => {
    return res.status(200).json(docs);
});

app.get("/all", (req, res) => {
    return res.status(200).json(mainData);
});

app.listen(8080, function(){
    console.log("Server Started");
});