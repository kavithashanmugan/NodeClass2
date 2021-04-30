const numberAsAString = '3'

console.log(typeof numberAsAString)//string

const number = parseInt(numberAsAString);

console.log(number);

console.log(typeof(number))

var total = number + 5;
var strTotal = numberAsAString + 5;
console.log(`Total : ${total} strTotal: ${strTotal}`);

const piAsText = '3.14'

const pi = parseFloat(piAsText);

console.log(pi)