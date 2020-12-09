const express = require('express');
const app = express.Router();

const data = require('../data');
const products = data.products;


app.get('/',function(req,res){
    res.locals.Products = products;
    res.locals.foot_name = "18127153 - Phan Nhat Minh";
  
    res.render('products');
  });
  
  app.get('/:id',function(req,res){
    var id = req.params.id ;
    var products = data.products;
    var cate = data.categories;

    var id = cate.find((ele)=>{
      return ele.title===id;
    })
    var Samsung_products = products.filter((ele)=>{
      return ele.category==id.id;
    })
    
    res.locals.Products = Samsung_products;
    res.locals.foot_name = "18127153 - Phan Nhat Minh";
  
    res.render('products');
  });

module.exports = app;