const container = document.querySelector("#container");

function createGrid(rows, columns) {
    for (let j = 0; j < columns; j++) {
        const rowDiv = document.createElement("div");
        container.append(rowDiv);
        for (let i = 0; i < rows; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "square");
            rowDiv.append(gridSquare);
        }
    }
}

createGrid(16, 16);

// listens for mouse entering squares
container.addEventListener("mouseenter", e => {
    const targetClass = e.target.className;
    if(targetClass === "square") {
        e.target.style.backgroundColor = "yellow";
    }
}, true); // capture set to true as mouseenter event doesn't bubble for event delegation

