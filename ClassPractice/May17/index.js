const express = require('express');

const app = express();

// const home = require('./home');
// const products = require('./product');

app.set('view engine','pug');

app.get('/',function(req,res){
    //rendering
    res.render('index',{});
})
// app.use('/',home);
// app.use('/myproducts',products);
// app.get('/',function(req,res){
//     res.send("hello")
// });

app.listen(3000,function(){
    console.log("i am listening")
})