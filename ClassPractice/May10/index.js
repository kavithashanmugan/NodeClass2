// console.log("javascript is running")

// window.alert("hi there")

// let myName = window.prompt("enter your name");

// console.log(myName)

// const greet = function(){
//     window.alert("Hi User");
// }

// setTimeout(greet,5000);

// greet();
//window.onload = function(){

setTimeout(()=>{
    let mainTitle = document.getElementById('mainTitle')
    mainTitle.style.color = "red"
},5000)

var divElements = document.querySelector('div');
console.log(divElements)
console.log(divElements.attributes)
console.log(divElements.getAttribute('class'))

if(!divElements.hasAttribute('class')){
    divElements.setAttribute('id','firstDiv')
}
console.log('DIv element has ID ?:' + divElements.hasAttribute('id'))

var AlldivElements = document.querySelectorAll('div');
console.log(AlldivElements)

