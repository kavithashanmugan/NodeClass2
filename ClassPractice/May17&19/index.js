const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const app = express();
const port = 3003;
const dburl = "mongodb://localhost:27017"
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: true });


app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function(req, res) {
    mongoClient.connect(dburl, function(err, client) {

        const myDataBase = client.db('comics');
        const myCollection = myDataBase.collection('superheroes');

        myCollection.find({}).toArray((err, documents) => {
            // console.log(documents);
            client.close();
            res.render('index', { documents });
        });
    });

});

app.get('/superheroes/:id', function(req, res) {
    const selectedId = req.params.id;

    mongoClient.connect(dburl, function(err, client) {
        const myDataBase = client.db('comics');
        const myCollection = myDataBase.collection('superheroes');
        const filter = { _id: ObjectID(selectedId) };

        myCollection.find(filter).toArray((err, documents) => {
            var selectedSuperHero = documents[0];
            client.close();
            res.render('superhero', { superhero: selectedSuperHero });
        });
    });
});

app.get('/edit/:id', function(req, res) {
    const selectedId = req.params.id;
    const colors = ['red', 'green', 'blue'];
    const weather = ['summer', 'spring'];
    mongoClient.connect(dburl, function(err, client) {
        const myDataBase = client.db('comics');
        const myCollection = myDataBase.collection('superheroes');
        const filter = { _id: ObjectID(selectedId) };
        myCollection.find(filter).toArray((err, documents) => {
            var selectedSuperHero = documents[0];
            client.close();
            res.render('edit', { superhero: selectedSuperHero });
        });
    });
});

app.post('/edit', urlEncodedParser, function(req, res) {
    const selectedId = req.body._id;
    const filter = { _id: ObjectID(selectedId) };
    const set = { $set: { name: req.body.name, description: req.body.description, color: req.body.color, weather: req.body.weather } };
    mongoClient.connect(dburl, function(err, client) {
        const myDataBase = client.db('comics');
        const myCollection = myDataBase.collection('superheroes');
        myCollection.updateOne(filter, set, (err, result) => {
            client.close();
            res.redirect('/edit/' + selectedId);
        });
    });
});
app.get('/delete/:id', function(req, res) {
    const selectedId = req.params.id;
    mongoClient.connect(dburl, function(err, client) {
        const myDataBase = client.db('comics');
        const myCollection = myDataBase.collection('superheroes');
        const filter = { _id: ObjectID(selectedId) };
        myCollection.deleteOne(filter, function(err, result) {
            client.close();
            res.redirect('/');
        });
    });
});
app.post('/superheroes', urlEncodedParser, function(req, res) {
    const newSuperHero = {
        name: req.body.superhero,
        description: req.body.description,
        color: [req.body.color],
        weather: req.body.weather
    }

    mongoClient.connect(dburl, function(err, client) {
        const myDataBase = client.db('comics');
        const myCollection = myDataBase.collection('superheroes');
        myCollection.insertOne(newSuperHero, (err, result) => {
            client.close();
            res.redirect('/');
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});