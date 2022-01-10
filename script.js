const rowBtn = document.querySelector(".row-btn")
const colBtn = document.querySelector(".column-btn")
const squares = document.querySelectorAll("td")
const table = document.querySelector('.c-table');
const colorEl = document.getElementById("color-select")
const fillUnfBtn = document.querySelector(".fill-unf")
const fillAllBtn = document.querySelector(".fill-all")
const clearBtn = document.querySelector(".clear-all")
const rmColBtn = document.querySelector(".rm-col")
const rmRowBtn = document.querySelector(".rm-row")
let mouseIsDown = false

//this event listener appends a new cell to the end of each row to create a column.
colBtn.onclick = (function(){
    let thObjs = table.tHead;
	for (let i=0; i<thObjs.rows.length; i++) {
		let newTH = document.createElement('th');
		thObjs.rows[i].appendChild(newTH);
		newTH.innerHTML = " "
	}

	let tdObjs = table.tBodies[0];
    
	for (let i=0; i<tdObjs.rows.length; i++) {
		let newCell = tdObjs.rows[i].insertCell(-1);
		newCell.innerHTML = " "
	}
})

//this event listener adds a row to the table
rowBtn.onclick = (function(){
        let tbObjs = table.tBodies[0];
        let newTR = document.createElement('tr');
        let newRow = tbObjs.insertRow()
        for(let i=0; i<tbObjs.rows[0].cells.length; i++){
            let newCell = newRow.insertCell(-1);
            newCell.innerHTML = " "
        }
    
})

//this event listener removes a column from the table when remove column button is clicked
//it does this by removing the last cell of each row
rmColBtn.onclick = (function(){
    let row = table.rows;  
    let i = 0; 
    for (var j = 0; j < row.length; j++) {
        row[j].deleteCell(i);
    }
})

//this function removes a row from the table
rmRowBtn.onclick = (function(){
    let tbObjs = table.tBodies[0];
    if(!(tbObjs.rows[1]===undefined)){ 
        tbObjs.deleteRow(1)
    }
})

/*
the functions below check when anywhere on the page has been clicked. If the area clicked is
a table cell the colorTd function runs and assigns the cell to the value the user chose in the selector. Another
event listener is there to check if the mouse is down and the mouse is over the table, if so, then it runs colorTd() function filling andy
cell the mouse is over when mouse is down. This way you can click and drag to fill cells*/
function colorTd(e){
    e.target.tagName ==="TD" && (e.target.style.backgroundColor = colorEl.value)
    }

table.onclick = (e) => colorTd(e);

document.onmousedown = (e) => {
  mouseIsDown = true;
  colorTd(e);
};

document.onmouseup = () => (mouseIsDown = false);
table.onmouseover = (e) => mouseIsDown && colorTd(e);

//this event listener listens for when the fill unfilled cells button is clicked. Once it is
//it checks every single td element, if the background color is not set to a color option,
//it fills that cell with the selected color
fillUnfBtn.onclick = (function(){
    const cells = document.querySelectorAll('td');
    colorArr = ["red","orange","yellow","green","blue","purple"]
    cells.forEach(cell => {
       
        let hold = cell.style.backgroundColor

        if(!(colorArr.includes(hold))){
            cell.style.backgroundColor = colorEl.value
        }


})
})

//this event listener listens for when the fill all cells button is clicked and fills
//add the cells with the selected color
fillAllBtn.onclick = (function(){
    const cells = document.querySelectorAll('td');
    
    cells.forEach(cell => {
            cell.style.backgroundColor = colorEl.value
})
})

clearBtn.onclick = (function(){
    const cells = document.querySelectorAll('td');
    
    cells.forEach(cell => {
            cell.style.backgroundColor = "white"
})
})


