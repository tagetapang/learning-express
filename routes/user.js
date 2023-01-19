const express = require("express");
const router = express.Router();
const middleware = require("../middleware");


router.get("/new",(req,res)=>{
    res.render("form")
})
router.post("/",(req,res)=>{
    res.send("created a new user")
})
router.get('/login',middleware,(req,res)=>{
    res.json({emial: "please imput email", col: "pl"});
})
const users = [{name:"tage"},{name:"valentina"}]
router.get('/:userid',(req,res)=>{
    
 
 
    console.log(req.user)
})

router.param("userid",(req,res,next,userid)=>{
    req.user = users[userid];
    next()
})
module.exports = router;