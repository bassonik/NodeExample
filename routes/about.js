const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("index.hbs",{
        pageTitle: "Title",
        date : new Date().getFullYear(),
        welcome: "Welcome to fucking page"
    });
});



module.exports = router;