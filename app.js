function generateDivsWithGrid(num) {
	let containerDiv = document.querySelector("body > div");

	// clear out any exsisting cell
	let cells = containerDiv.querySelectorAll('div')
	cells.forEach(cell => cell.remove)

	for (let i = 0; i < num * num; i++) {
		let cell = document.createElement('div')
		cell.className = 'cell'
		// cell.innerHTML = i;
		// cell.style.backgroundColor = 'blue';
		cell.addEventListener('mouseover', () => {
			// cell.classList.add('hoverd')
			cell.style.backgroundColor = 'red';
		})
		containerDiv.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
		containerDiv.style.gridTemplateRow = `repeat(${num}, 1fr)`;
		containerDiv.appendChild(cell);

	}
}



