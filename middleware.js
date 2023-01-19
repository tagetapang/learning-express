const express = require("express");

const middleware =(req,res,next)=>{
    console.log(req.originalUrl);
    next()
}
module.exports = middleware