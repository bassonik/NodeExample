const express = require("express");
const router = express.Router();



router.get("/",(req,res)=>{
    res.render("projects.hbs", {test:[
        25,33,44
    ]});
});



module.exports = router;