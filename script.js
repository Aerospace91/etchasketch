const container = document.getElementById('container');

if (container) {
    makeDivs(256);
} else {
    console.error("Container element not found.");
}

function makeDivs(numDivs) {
    for (let d = 0; d < numDivs; d++) {
        let cells = document.createElement('div');
        container.appendChild(cells);
    }
}

makeDivs(16);

const cells = document.querySelectorAll('#container div');
cells.forEach(cell => {
    cell.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
});

function reset() {
    let reset = prompt("How many squares per side?");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    makeDivs(reset);
}