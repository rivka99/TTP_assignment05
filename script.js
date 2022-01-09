let rowBtn = document.querySelector(".row-btn")
let colBtn = document.querySelector(".column-btn")
let squares = document.querySelectorAll("td")


function addRow(tableClass){
    let tblBodyObj = document.querySelector(tableClass).tBodies[0];
    let newTR = document.createElement('tr');
    let newRow = tblBodyObj.insertRow()
    for(let i=0; i<tblBodyObj.rows[0].cells.length;i++){
        let newCell = newRow.insertCell(-1);
		newCell.innerHTML = " "
    
  

	
	}
}


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

colBtn.addEventListener("click", function(){
    addColumn(".c-table")
})
rowBtn.addEventListener("click", function(){
    addRow(".c-table")
})

const table = document.querySelector('.c-table');


table.addEventListener('click', (event) => {
  console.log(document.getElementById("color-select").value)
  const rows = document.querySelectorAll('tr');
  const rowsArray = Array.from(rows);
  const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
  const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
  const columnIndex = columns.findIndex(column => column == event.target);
  console.log(rowIndex-1, columnIndex)
  document.querySelector(".c-table").tBodies[0].rows[rowIndex-1].cells[columnIndex].style.backgroundColor = document.getElementById("color-select").value
})

