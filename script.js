let button = document.querySelector("#btn");
let boxes = document.querySelectorAll(".box");


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgba(${val1}, ${val2}, ${val3})`
}

button.addEventListener ("click", (e) => {
    boxes.forEach(e => {
        e.style.backgroundColor = getRandomColor();
   });
})