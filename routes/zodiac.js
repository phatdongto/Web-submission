const express = require('express');
const app = express.Router();

const data = require('../data');
const zodiac = data.zodiacs;

//Question 4
app.get('/', function(req, res) {
    res.locals.Zodiacs = data.zodiacs;
    res.locals.foot_name = "18127168 - Tran Bui Tai Nhan";

    res.render('zodiac');
});
  
app.get('/:id',function(req,res){
    var id =req.params.id ;
    var zodiacs = zodiac.find((element)=>{
        return element.name === id;
    })
    res.locals.Zodiac = zodiacs;
    res.locals.foot_name = "18127168 - Tran Bui Tai Nhan";

    res.render('zodiac-details');
})

module.exports = app;