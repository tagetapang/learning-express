const express = require("express")
const app = express()
const port = 5000;
app.set("view engine","ejs")
// app.use(express.static("public"))
app.get('/download',(req,res)=>{
    res.download('server.js')
})
app.listen(port,() => {
    console.log(`app started in port http://localhost:${port}`)
})
app.use('/user',require('./routes/user'));