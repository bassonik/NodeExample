const express = require('express');
const app = express();
const hbs = require("hbs");
const fs = require('fs');

const port = process.env.PORT || 3000;

// register partials
hbs.registerPartials(__dirname + "/views/partials/");

//helpers
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

//middleware

app.set('view engine', "hbs");
app.use(express.static(__dirname + "/public/"));

app.use((req,res,next)=>{
    var now = new Date().toString();
    var log = `${now} : ${req.method} ${req.path}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err)=>{
        if(err){
            console.log(err);
        }
    });
    next();
});

// app.use((req,res, next)=>{
//     res.render('maintainence.hbs');
// });



//routes 

const about = require("./routes/about");
const index = require("./routes/index");

app.use("/", index);
app.use("/about", about);


app.listen(port , ()=>{
    console.log(`Server is running on ${port}`);
});