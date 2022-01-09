let rowBtn = document.querySelector(".row-btn")
let colBtn = document.querySelector(".column-btn")
let squares = document.querySelectorAll("td")
const table = document.querySelector('.c-table');
let colorEl = document.getElementById("color-select")
let fillUnfBtn = document.querySelector(".fill-unf")
let fillAllBtn = document.querySelector(".fill-all")
let clearBtn = document.querySelector(".clear-all")
let rmColBtn = document.querySelector(".rm-col")
let rmRowBtn = document.querySelector(".rm-row")


//this event listener appends a new cell to the end of each row to create a column.
colBtn.addEventListener("click", function(){
    let tblHeadObj = table.tHead;
	for (let i=0; i<tblHeadObj.rows.length; i++) {
		let newTH = document.createElement('th');
		tblHeadObj.rows[i].appendChild(newTH);
		newTH.innerHTML = " "
	}

	let tbObjs = table.tBodies[0];
    
	for (let i=0; i<tbObjs.rows.length; i++) {
		let newCell = tbObjs.rows[i].insertCell(-1);
		newCell.innerHTML = " "
	}
})
//this event listener adds a row to the table
rowBtn.addEventListener("click", function(){
        let tbObjs = table.tBodies[0];
        let newTR = document.createElement('tr');
        let newRow = tbObjs.insertRow()
        for(let i=0; i<tbObjs.rows[0].cells.length;i++){
            let newCell = newRow.insertCell(-1);
            newCell.innerHTML = " "
        }
    
})
//this event listener calls removes a column from the table when remove column button is clicked
rmColBtn.addEventListener("click", function(){
    let row = table.rows;  
    let i = 0; 
    for (var j = 0; j < row.length; j++) {

        // Deleting the ith cell of each row.
        row[j].deleteCell(i);
    }
})
//this function removes a row from the table
rmRowBtn.addEventListener("click", function(){
    let tbObjs = table.tBodies[0];
    console.log(tbObjs.rows[1])
    if(tbObjs.rows[1]===undefined){
        alert("You cannot delete a table with a single row.")
    }else{
        tbObjs.deleteRow(1)
    }
})

/*
this event listener checks for when the table is clicked
once it's clicked it fills rows with all the current rows in the table and creates an array from it
it uses this to get the index of the cell that was clicked (uses event.target for this)
then it gets the exact element that was clicked and changes the color based on the users selection of color 
in the color selector */
table.addEventListener('click', (event) => {
  const rows = document.querySelectorAll('tr');
  const rowsArray = Array.from(rows);
  const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
  const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
  const columnIndex = columns.findIndex(column => column == event.target);
  document.querySelector(".c-table").tBodies[0].rows[rowIndex-1].cells[columnIndex].style.backgroundColor = colorEl.value
})

//this event listener listens for when the fill unfilled cells button is clicked. Once it is
//it checks every single td element, if the background color is not set to a color option,
//it fills that cell with the selected color
fillUnfBtn.addEventListener('click',function(){
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
fillAllBtn.addEventListener('click',function(){
    const cells = document.querySelectorAll('td');
    
    cells.forEach(cell => {
            cell.style.backgroundColor = colorEl.value
})
})

clearBtn.addEventListener('click',function(){
    const cells = document.querySelectorAll('td');
    
    cells.forEach(cell => {
            cell.style.backgroundColor = "white"
})
})


