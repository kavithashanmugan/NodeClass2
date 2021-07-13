var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

//Import the module
var mongoDB = "mongodb://127.0.0.1/june_db_07";
//Set up default db connection
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//get the default connection
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

var Schema = mongoose.Schema;

const breakFast = new Schema({
    egg: {
        type: Number,
        min: [6, "Too few eggs"],
        max: 12,
    },
    salad: {
        type: Number,
        required: [true, "salad is healthy"],
    },
});

const breakFastModel = db.model("Breakfast", breakFast);
var SuperHeroSchema = new Schema({
    name: String,
    movies: Number,
});

var superheroModel = mongoose.model("superheroColl", SuperHeroSchema);

/* GET home page. */
router.get("/", function(req, res, next) {
    const myData = new breakFastModel({
        egg: 3,
        salad: 1,
    });

    let error =
        myData.validateSync();
    console.log(error); //var myData = new superheroModel({name:'Hulk', movies:3});
    //  myData.save(function(err) {
    //  if (err) console.log("err");
    //});

    // superheroModel.find({ name: "Hulk" }, "name movies", function(err, result) {
    //console.log(result.length);
    //});
    res.render("index", { title: "Express" });
});

module.exports = router;