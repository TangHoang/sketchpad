DEFAULT_SIZE = 16;

const grid = document.querySelector(".grid-container");


window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}

function setupGrid(size){

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i=0; i<size*size; i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square")
        gridSquare.addEventListener("mouseDown", changeColor);
        grid.appendChild(gridSquare);
    }
}

function changeColor(){

}