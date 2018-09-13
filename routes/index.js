const express = require("express");
const router = express.Router();




router.get("/",(req,res)=>{
   res.render("about.hbs", {
       pageTitle: "Test",
       date: new Date().getFullYear(),
   })
});






module.exports = router;