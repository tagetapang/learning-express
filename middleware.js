const express = require("express");

const middleware = (req,res,next)=>{
    console.log(req.originalUrl);
    next()
    console.log("wow this happend after the NEXT program")
}
module.exports = middleware