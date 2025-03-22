const container = document.querySelector("#container");
const promptBtn = document.createElement("button");
const gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "grid-container");


promptBtn.textContent = "Start";
container.append(promptBtn);
container.append(gridContainer);

function removeGrid() {
    if (gridContainer.hasChildNodes()) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    }
}

function createSquare(size) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    return square;
}

function createRow(squaresPerSide, squareSize) {
    const row = document.createElement("div");
    row.setAttribute("class", "rowDiv");
    for (let i = 0; i < squaresPerSide; i++) {
        row.append(createSquare(squareSize));
    }
    return row;
}

// creates a grid of squares 
function createGrid(squaresPerSide) {
    const gridSize = 600;
    const squareSize = gridSize / squaresPerSide;

    removeGrid();
    for (let j = 0; j < squaresPerSide; j++) {
        gridContainer.append(createRow(squaresPerSide, squareSize));
    }
}


promptBtn.addEventListener("click", e => {
    const squaresPerSide = parseInt(prompt("What size grid you want?"));
    while (isNaN(squaresPerSide)
        || (squaresPerSide < 0)
        || (squaresPerSide > 100)) {
        alert("Enter a valid number between 0 to 100.");
        return;
    }
    createGrid(squaresPerSide);

});


// listens for mouse entering squares
container.addEventListener("mouseenter", e => {
    const targetClass = e.target.className;
    if (targetClass === "square") {
        e.target.style.backgroundColor = "grey";
    }
}, true); // capture set to true as mouseenter event doesn't bubble for event delegation

