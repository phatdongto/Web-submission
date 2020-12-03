const e = require('express');
var express = require('express');
var hbs = require('express-handlebars');

var app = express();

app.use(express.static(__dirname ));


app.engine('hbs', hbs({
    extname:'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname +'/views/layouts',
    partialsDir: __dirname +'/views/particals'
}));

app.set('view engine', 'hbs');

var data = require('./data');
var zodiac= data.zodiacs;

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.htm');
})

app.get('/task4', function(req, res) {
  res.location.name = "";
  res.location.strengths;
  res.location.likes;
  res.location.dislikes;
  res.location.description;

  res.render('index');
});

app.get('/task4/:id',function(req,res){

  var id =req.params.id ;
  var z = zodiac.find((element)=>{
    return element.name === id;
  })
  res.locals.Zodiac = z;
  res.render('task4');
})

app.listen(5000, function() {
  console.log('Server is listening on port 5000...');
});