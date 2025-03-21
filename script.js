const container = document.querySelector("#container");
const promptBtn = document.createElement("button");
const gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "grid-container");


promptBtn.textContent = "Start";
container.append(promptBtn);
container.append(gridContainer);

// creates a grid of squares 
function createGrid(e) {
    const squaresPerSide = prompt("What size grid you want?");
    if (gridContainer.hasChildNodes()) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    }
    for (let j = 0; j < squaresPerSide; j++) {

        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "rowDiv");
        gridContainer.append(rowDiv);
        for (let i = 0; i < squaresPerSide; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "square");
            rowDiv.append(gridSquare);
        }
    }
}

promptBtn.addEventListener("click", createGrid);

// listens for mouse entering squares
container.addEventListener("mouseenter", e => {
    const targetClass = e.target.className;
    if (targetClass === "square") {
        e.target.style.backgroundColor = "grey";
    }
}, true); // capture set to true as mouseenter event doesn't bubble for event delegation

