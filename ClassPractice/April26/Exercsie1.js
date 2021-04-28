//addition
var total;
var number1, number2;
number1 = 5;
number2 = 11;
total = number1 + number2;
total = total + 10;
total = (number1 + 10) * 2;
total = number1 + 10 * 2;
console.log("Total",total);

//modulus
var modu = number2 % number1;
console.log("Modu: "+ modu)

//increment,decrement ++ ,--
var number3 = 0,number4 = 0, newValuePost = 0,newValuePre = 0;
number3++;
console.log("number3 1st : "+ number3 );
++number3;
console.log("number3 2nd: "+ number3 );

number4--;
console.log("number4 : "+ number4 );
--number4;
console.log("number4 : "+ number4 );

newValuePost = number3++;
newValuePre = ++number3;
