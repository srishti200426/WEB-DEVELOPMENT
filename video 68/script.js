console.log("harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "red";
// document.querySelector(".box").style.backgroundColor = "green"
console.log(document.querySelectorAll(".box"))
// document.querySelectorAll(".box").style.backgroundColor = "green"  throws an error

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})

e = document.getElementsByTagName("div")
e[4].matches("red")
e[3].matches("red")

