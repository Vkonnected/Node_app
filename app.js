const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const pokemonPlus = require('pokemon-plus');
const supervillains = require('supervillains');
const superheroes = require('superheroes');
app.get('/', function(req, res) {
    
let a =pokemonPlus.random();
console.log(a);
let b = pokemonPlus.random();
    res.send((`${a} vs ${b}`));
    console.log(b);
});







app.listen(3000, function() {
    console.log('Server running at 3000')
});