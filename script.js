const container = document.querySelector("#container");
const promptBtn = document.createElement("button");
promptBtn.textContent = "Start";
container.append(promptBtn);
function createGrid(e) {
    const squaresPerSide = prompt("What size grid you want?");
    for (let j = 0; j < squaresPerSide; j++) {
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "rowDiv");
        container.append(rowDiv);
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
    if(targetClass === "square") {
        e.target.style.backgroundColor = "grey";
    }
}, true); // capture set to true as mouseenter event doesn't bubble for event delegation

