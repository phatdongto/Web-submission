var express = require('express');
var hbs = require('express-handlebars');
var router = express.Router()
var app = express();

app.use(express.static(__dirname ));

var footer = function (Name)
{
    return Name;
}

app.engine('hbs', hbs({
    extname:'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname +'/views/layouts',
    partialsDir: __dirname +'/views/particals',
    helpers:{
      footer: footer
  }
}));

app.set('view engine', 'hbs');
app.set('port',(process.env.PORT || 5000));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.htm');
})

var Products = require('./task3')
app.use('/Products', Products);

Zodiacs = require('./task4')
app.use('/Zodiacs',Zodiacs);

app.listen(app.get('port'),function(){
  console.log("Server is listening on port "+ app.get('port'));
});