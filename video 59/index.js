let mr = Math.random();
let a = prompt("enter first number")
let b = prompt("enter second number")
let input = prompt("enter operation")
if(mr < 0.1){
    if(input == "+"){
        console.log(a+b)
    }
  else if(input == "*"){
        console.log(a-b) 
    }
    else if(input == "-"){
        console.log(a/b) 
    }
    else if(input == "/"){
        console.log(a**b)
    }
}

else{
    if(input == "+"){
        console.log(a+b) ;
    }

    else if(input == "*"){
        console.log(a*b) 
    }
    else if(input == "-"){
        console.log(a-b) 
    }
    else if(input == "/"){
        console.log(a/b) 
    }
}