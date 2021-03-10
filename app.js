const express = require("express");
const app = express();

const food = require("./routes/food");

app.use("/", food);

app.get("/", (req, res) => {
    fs.readFile("docs.json", (err, data) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        }
        const docs = JSON.parse(data);
        res.json(docs);
    });
});



app.listen(8080, function(){
    console.log("Server Started");
});