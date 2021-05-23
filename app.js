const express = require("express");
const app = express();
const docs = require("./docs.json");

const routes = require("./routes/routes.js");
app.use("/", routes);

app.use(express.static(__dirname + '/images'));

app.get("/docs", (req, res) => {
    return res.status(200).json(docs);
});

app.listen(8080, function(){
    console.log("Server Started");
});