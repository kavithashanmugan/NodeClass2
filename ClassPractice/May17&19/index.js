const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.get('/', function(req, res){
    res.render('index3', {mytitle: 'Hey', message:'I like to code'});
});
app.get('/firstpage', function(req, res){
    res.render('myfirstpage', {mytitle: 'Hey'});
});
app.listen(3002,function()
{
    console.log('I am listening ');
});