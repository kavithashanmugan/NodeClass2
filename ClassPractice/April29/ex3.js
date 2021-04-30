var age = process.argv[2];

if(age >= 65){
    console.log("Senior Citizen")
}
else if(age >=18 && age < 65){
    console.log("Adult")
}
else if(age < 18){
    console.log("Minor")
}
else if(age == null){
    console.log("input the age and run again")
}

//Ternary operator

var total = 20;
var message = (total === 20) ? 'Pass' : 'Fail';
console.log(message)