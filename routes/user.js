const express = require("express");
const router = express.Router();
const middleware = require("../middleware");


router.get("/new",(req,res)=>{
    res.render("form")
})
router.post("/",(req,res)=>{
    const valid = false;
    if(valid){
        users.push(req.body.name)
        res.redirect('/user/login');


    }
    else{
        console.log(Error);
        res.render("form")
    }
    
   
})
router.get('/login',middleware,(req,res)=>{
    res.json({users});
})
const users = [{name:"tage"},{name:"valentina"}]
router.get('/:userid',(req,res)=>{
 
    console.log(req.user)
})
router.get('/',(req,res)=>{
    console.log(req.query.namee);
    res.send("this is the / part ")
})

router.param("userid",(req,res,next,userid)=>{
    req.user = users[userid];
    next()
})
module.exports = router;