var age = process.argv[2]
var residence = process.argv[3]
let eligible = (age >=40 || residence == "Saskatoon")
console.log(eligible)