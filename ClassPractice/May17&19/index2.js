const express = require('express');
const app = express();
const port = 3003;
const superheroes = [
  { id:1, name: 'SPIDER-MAN'},
  { id:2, name: 'CAPTAIN MARVEL' },
  { id:3, name: 'HULK'},
  { id:4, name: 'THOR' },
  { id:5, name: 'IRON MAN' },
  { id:6, name: 'DAREDEVIL' },
  { id:7, name: 'BLACK WIDOW' },
  { id:8, name: 'CAPTAIN AMERICA' },
  { id:9, name: 'WOLVERINE' }
];
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', function(req,res){
    
    res.render('index3',{ superheroes: superheroes });
});

app.get('/superheroes/:id', function(req,res){
  const selectedId = req.params.id;
  let selectedSuperHero = superheroes.filter(superhero => {
    return superhero.id == selectedId;
  })

  selectedSuperHero = selectedSuperHero[0];
  res.render('superhero', {superhero:selectedSuperHero});
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});