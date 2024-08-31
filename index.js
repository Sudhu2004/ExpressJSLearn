import express from "express";
const app = express();
const port = 3000;



// Do anything with the `req` before sending the data

app.get("/" ,(req, res)=> {
    // res.send("<h1>Hello World</h1>");
    res.sendStatus(200);
})

app.get("/about",(req, res)=> {
    // res.end("<h1> About Page </h1>");
    res.sendStatus(200);
})

app.post("/register", (req, res) => {
    res.sendStatus(201);
})

app.put("/user/sudhu", (req, res) => {
    res.sendStatus(200);
})

app.patch("/user/sudhu", (req, res) => {
    res.sendStatus(200);
})

app.delete("/user/sudhu", (req, res) => {
    res.sendStatus(200);
})

// () in the blow method LISTEN is a callback method
app.listen(port, ()=> {
    console.log(`Server Listening on Port ${port}`)
})
