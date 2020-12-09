const express = require('express');
const hbs = require('express-handlebars');

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

}));

app.set('view engine', 'hbs');
app.set('port',(process.env.PORT || 5000));

// main
app.get('/',function(req,res){
  res.locals.foot_name = "Group13";

  res.render('index');
})

//Task3
app.use('/Products', require('./routes/product'))

//Task4
app.use('/Zodiacs', require('./routes/zodiac'))

app.listen(app.get('port'),function(){
  console.log("Server is listening on port "+ app.get('port'));
});
