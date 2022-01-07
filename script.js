

document.querySelector(".grid").innerHTML += `   <div class="grid-item"></div>
<div class="grid-item"></div>
<div class="grid-item"></div></div>`
let holdGridI = document.querySelectorAll(".grid-item")
let newAutos = ""
let gridEl = document.querySelector(".grid")
let amount = gridEl.style.gridTemplateColumns
let amountCount = 0
function countInstances(string, word) {
    return string.split(word).length - 1;
 }
amountCount = countInstances(amount, "20px")
console.log("a"+JSON.stringify(amount)+amountCount)
for(let i=0; i<4; i++){
    gridEl.style.gridTemplateColumns +=" 20px"
}



