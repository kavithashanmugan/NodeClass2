const express = require('express');
const app = express();

app.get('/post',function(req,res){
    res.send("hello");
})

app.get('/products',function(req,res){
    res.json({productName:'storage',category:"outdoor storage"})
})
app.put('/products',function(req,res){
    res.send("hello you send me post")
})

app.listen(3001,function(){
    console.log("listening...")
})