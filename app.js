let click = true;
let errorMessage = document.querySelector('.error')
function generateDivsWithGrid(num) {
	let containerDiv = document.querySelector("body > div");

	// clear out any exsisting cell
	let cells = containerDiv.querySelectorAll('div')
	cells.forEach(cell => cell.remove())

	for (let i = 0; i < num * num; i++) {
		let cell = document.createElement('div')
		cell.className = 'cell'
		// cell.innerHTML = i;
		// cell.style.backgroundColor = 'blue';
		cell.addEventListener('mouseover', () => {
			// cell.classList.add('hoverd')
			if (click) cell.style.backgroundColor = 'red';
		})
		containerDiv.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
		containerDiv.style.gridTemplateRow = `repeat(${num}, 1fr)`;
		containerDiv.appendChild(cell);

	}
}
document.addEventListener('DOMContentLoaded', () => {
	errorMessage.style.display = "none";
	generateDivsWithGrid(16)
})


const btnForCells = document.querySelector("body > button")
btnForCells.addEventListener('click', () => {
	let nOfSquares = prompt("enter the number of squares", "16");
	if (nOfSquares > 2 && nOfSquares < 100) {
		generateDivsWithGrid(nOfSquares);
		errorMessage.style.display = "none"
	}
	else {
		console.log('invalid input');
		errorMessage.style.display = "block"
	}
})

document.querySelector('body').addEventListener('click', (e) => {

	if (e.target.tagName != 'BUTTON') {
		click = !click;
		if (click) {
			document.querySelector("div.mode").textContent = "Mode: coloring"
		} else {
			document.querySelector("div.mode").textContent = "Mode: not coloring"

		}
	}
})