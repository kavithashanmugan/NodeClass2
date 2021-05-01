var message = "3.14 it's a great number but 42 it's the answer to life.";
var pi = parseFloat(message.substr(0,4));
console.log(pi)
var answerToLife = parseInt(message.substr(29,2));
console.log(answerToLife)
var result = pi + answerToLife;
console.log(`${result} is the result of adding pi and answerToLife `)
console.log(result.toString())