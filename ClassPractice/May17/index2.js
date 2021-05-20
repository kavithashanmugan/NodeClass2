const express = require('express');
const app = express();
const port = 3003;
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', function(req,res){
    const superheroes = [
        { name: 'SPIDER-MAN'},
        { name: 'CAPTAIN MARVEL' },
        { name: 'HULK'},
        { name: 'THOR' },
        { name: 'IRON MAN' },
        { name: 'DAREDEVIL' },
        { name: 'BLACK WIDOW' },
        { name: 'CAPTAIN AMERICA' },
        { name: 'WOLVERINE' }
    ];
    res.render('index2',{ superheroes: superheroes });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});