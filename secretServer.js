import express from "express";
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const secretPassword = "ABCD";
app.use(bodyParser.urlencoded({ extended :true}));
var isAuth = false; 

function verifyUser(req, res, next) {
    console.log(req.body);
    if(req.body["password"] == secretPassword) {
       isAuth = true;
    }
    next();
}
app.use(verifyUser);

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/secrets.html");
});

app.post("/check", (req, res)=> {
    console.log(isAuth);
    if(isAuth) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/secrets.html");
    }
});


app.listen(port, ()=> {
    console.log(`Server Listening on Port ${port}`);
});