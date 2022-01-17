const express = require("express");
const app=express();


let port = process.env.port||3000;

app.get("/",(req,res) => {
    res.send("Hello world");
});

app.get("/players",(req,res) => {
    const importData = require("./data.json");
    res.send(importData);
});

app.listen(port,()=>{
    console.log(`Example app is running on port http://localhost:${port}`);
});



