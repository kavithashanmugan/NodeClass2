var text = "HELLO";
var result = "";
const lastCharacterPosition = text.length;
for(i=lastCharacterPosition;i--;){
    
   result =  result.concat(text.charAt(i))
    
}
console.log(result)