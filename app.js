
function generateDivs(num) {
    let containerDiv = document.querySelector("body > div");
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div')
        row.className = 'row'

        for (let j = 0; j < num; j++) {
            let cell = document.createElement('div')
            cell.className = 'cell'
            cell.innerText = (i * num) + j
            row.appendChild(cell);
        }
        containerDiv.appendChild(row);
    }
}



// Taken code from internet

/* function genDivs(v) {
    // var e = document.body; // whatever you want to append the rows to: 
    let containerDiv = document.querySelector('.container')
    for (let i = 0; i < v; i++) {
        let row = document.createElement("div");
        row.className = "row";

        for (let x = 1; x <= v; x++) {
            let cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.innerText = (i * v) + x;
            row.appendChild(cell);
        }
        containerDiv.appendChild(row);
    }
    // document.getElementById("code").innerText = e.innerHTML;

}
 */
