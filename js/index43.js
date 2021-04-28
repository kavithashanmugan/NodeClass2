var textVar = "game of thrones";
var firstChar,secondChar,thirdChar,result;
firstChar = textVar.charAt(0)
secondChar = textVar.charAt(5)
thirdChar = textVar.charAt(8)
result = firstChar.concat(secondChar,thirdChar).toUpperCase();

console.log("the final result is:",result)