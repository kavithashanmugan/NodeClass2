
function add(){
    var numbersToAdd = process.argv.slice(2);
    let sum = 0;
    for(i=0;i<numbersToAdd.length;i++){
        sum = sum + parseInt(numbersToAdd[i]);
    }
    
    if(numbersToAdd.length==5){
        console.log("sum of 5 numbers:",sum)
    }
    else if(numbersToAdd.length==10){
        console.log("sum of 10 numbers:",sum)
    }
    else if((numbersToAdd.length != 5) && (numbersToAdd.length != 10) ){
        console.log("sum of " + numbersToAdd.length + " numbers is " + sum)
    }
    
  
}

add();

