import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();
var bandName = "";


function logger(req, res, next) {
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
}
  
app.use(logger);

app.use(bodyParser.urlencoded({ extended: true }));
function bandNameGenerator(req, res, next) {
    console.log(req.body);
    bandName = req.body["street"] + req.body["pet"];
    next();
}

app.use(bandNameGenerator);
  
app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res)=> {
    res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, ()=> {
    console.log(`Server Listening on Port ${port}`);
});

