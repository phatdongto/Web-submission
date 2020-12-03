var express = require('express');
var router = express.Router();


var data = require('./data');
var zodiac= data.zodiacs;

router.get('/', function(req, res) {
  res.locals.foot = "18127168 - Tran Bui Tai Nhan"

  res.render('index');
});


router.get('/:id',function(req,res){

  var id =req.params.id ;
  var z = zodiac.find((element)=>{
    return element.name === id;
  })
  res.locals.Zodiac = z;
  res.locals.foot = "18127168 - Tran Bui Tai Nhan"

  res.render('task4');
})

module.exports = router;