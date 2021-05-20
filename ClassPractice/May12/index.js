var para = document.getElementById('detail');
para.innerText= "I have <span> been changed </span>"
var desc = document.getElementById('description');
desc.innerHTML = "I have <b> been changed </b>";
function displayDate() {
    document.getElementById('detail').innerHTML = Date();
  }

var myButton = document.querySelector('button');

myButton.addEventListener('click',function(){
    alert('You have clicked me');
});

// myButton.addEventListener('mousemove',displayDate)

