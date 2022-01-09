let rowBtn = document.querySelector(".row-btn")
let colBtn = document.querySelector(".column-btn")
let squares = document.querySelectorAll("td")
const table = document.querySelector('.c-table');
let colorEl = document.getElementById("color-select")
let fillUnfBtn = document.querySelector(".fill-unf")


//this function adds a row to the table
function addRow(tableClass){
    let tblBodyObj = document.querySelector(tableClass).tBodies[0];
    let newTR = document.createElement('tr');
    let newRow = tblBodyObj.insertRow()
    for(let i=0; i<tblBodyObj.rows[0].cells.length;i++){
        let newCell = newRow.insertCell(-1);
		newCell.innerHTML = " "
    
  

	
	}
}

//this function adds a column to the table
function addColumn(tableClass){
	let tblHeadObj = document.querySelector(tableClass).tHead;
	for (let i=0; i<tblHeadObj.rows.length; i++) {
		let newTH = document.createElement('th');
		tblHeadObj.rows[i].appendChild(newTH);
		newTH.innerHTML = " "
	}

	let tblBodyObj = document.querySelector(tableClass).tBodies[0];
    
	for (let i=0; i<tblBodyObj.rows.length; i++) {
		let newCell = tblBodyObj.rows[i].insertCell(-1);
		newCell.innerHTML = " "
	}
}
//this event listener calls the addcolumn function when the add column button is clicked
colBtn.addEventListener("click", function(){
    addColumn(".c-table")
})
//this event listener calls the addRow function when the add row button is clicked
rowBtn.addEventListener("click", function(){
    addRow(".c-table")
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

