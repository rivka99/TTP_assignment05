let rowBtn = document.querySelector(".row-btn")
let colBtn = document.querySelector(".column-btn")
let squares = document.querySelectorAll("td")
squares.style.color= "green"
function addColumn(tblId){
	let tblHeadObj = document.getElementById(tblId).tHead;
	for (let i=0; i<tblHeadObj.rows.length; i++) {
		let newTH = document.createElement('th');
		tblHeadObj.rows[i].appendChild(newTH);
		newTH.innerHTML = " "
	}

	let tblBodyObj = document.getElementById(tblId).tBodies[0];
	for (let i=0; i<tblBodyObj.rows.length; i++) {
		let newCell = tblBodyObj.rows[i].insertCell(-1);
		newCell.innerHTML = " "
	}
}

function addRow(tblId){
    let tblBodyObj = document.getElementById(tblId).tBodies[0];
    let newTR = document.createElement('tr');
    let newRow = tblBodyObj.insertRow()
    for(let i=0; i<tblBodyObj.rows[0].cells.length;i++){
        
        let newCell = newRow.insertCell(-1);
		newCell.innerHTML = " "
    
  

	
	}
}

colBtn.addEventListener("click", function(){
    addColumn("c-table")
})
rowBtn.addEventListener("click", function(){
    addRow("c-table")
})