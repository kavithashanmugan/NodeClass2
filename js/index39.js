var firstName = "Kavitha"
var lastName = "Shanmugan"
var nameCharacters = firstName.length; 
var lastNameCharacters = lastName.length;
var charsDiff = lastNameCharacters - nameCharacters;
console.log(`My first name is ${firstName} and it is ${nameCharacters}  characters long`)
console.log(`My first name is ${lastName} and it is ${lastNameCharacters}  characters long`)
console.log(`The character difference between my first name and last name is ${charsDiff}`)
console.log("My first name is longer than my last name:",nameCharacters > lastNameCharacters)