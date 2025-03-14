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

container.addEventListener("mouseover", e => {
    const targetClass = e.target.className;
    if(targetClass === "square") {
        e.target.style.backgroundColor = "black";
    }
})