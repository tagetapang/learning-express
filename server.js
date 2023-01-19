const express = require("express")
const app = express()
const port = 5000;
app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
    console.log("this is the get part");
    res.render("index")
    // res.send("this is the response")
})
app.get('/download',(req,res)=>{
    res.download('server.js')
})
app.listen(port,() => {
    console.log(`app started in port http://localhost:${port}`)
})