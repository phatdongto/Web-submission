var express = require('express');
var router = express.Router();

var data = require('./data');
var products = data.products;

router.get('/',function(req,res){
  res.locals.Products = products;
  res.locals.foot = "18127153 - Phan Nhat Minh"

  res.render('products')
});

router.get('/Samsung',function(req,res){
  var cate = data.categories;
  var id = cate.find((ele)=>{
    return ele.title==="Samsung"
  })
  var Samsung_products = products.filter((ele)=>{
    return ele.category==id.id;
  })
  
  res.locals.Products = Samsung_products;
  res.locals.foot = "18127153 - Phan Nhat Minh"

  res.render('products')
});

router.get('/Panasonic',function(req,res){
  var products = data.products;
  var cate = data.categories;
  var id = cate.find((ele)=>{
    return ele.title==="Panasonic"
  })
  var Samsung_products = products.filter((ele)=>{
    return ele.category==id.id;
  })
  
  res.locals.Products = Samsung_products;
  res.locals.foot = "18127153 - Phan Nhat Minh"

  res.render('products')
});

router.get('/Sony',function(req,res){
  var products = data.products;
  var cate = data.categories;
  var id = cate.find((ele)=>{
    return ele.title==="Sony"
  })
  var Samsung_products = products.filter((ele)=>{
    return ele.category==id.id;
  })
  
  res.locals.Products = Samsung_products;
  res.locals.foot = "18127153 - Phan Nhat Minh"

  res.render('products')
});

module.exports = router;