const express = require("express")
const app = express()
const port = 5000;
app.get('/',(req,res)=>{
    console.log("this is the get part");
    res.send("this is the response")
})
app.listen(port)