DEFAULT_SIZE = 16;
DEFAULT_COLOR = "black";
DEFAULT_MODE = "color";

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let mouseDown;
document.body.onmousedown = () => {mouseDown = true;}
document.body.onmouseup = () => {mouseDown = false;}


const grid = document.querySelector(".grid-container");
const colorPicker = document.getElementById("colorpicker");
const colorButton = document.getElementById("color-button");
const eraserButton = document.getElementById("eraser-button");
const clearButton = document.getElementById("clear-button");
const pixelValue = document.getElementById("pixel-value");
const pixelSlider = document.getElementById("pixel-slider");
const gridSquare = document.querySelectorAll(".grid-square");

colorPicker.oninput = (e) => setColor(e.target.value);

colorButton.onclick = () => {
    setMode("color");
    colorButton.classList.toggle("highlight");
    eraserButton.classList.remove("highlight");
    clearButton.classList.remove("highlight");
}

eraserButton.onclick = () => {
    setMode("eraser");
    eraserButton.classList.toggle("highlight");
    clearButton.classList.remove("highlight");
    colorButton.classList.remove("highlight");
}


clearButton.onclick = () => {
    clearGrid();
    eraserButton.classList.remove("highlight");
    colorButton.classList.remove("highlight");
}

pixelSlider.onchange = (e) => setSize(e.target.value);

function setColor(newColor){
    currentColor = newColor;
}
function setMode(newMode){
    currentMode = newMode;
    if(currentMode == "color"){setupGrid(currentSize);}
}
function highlight(e){
    e.classList.toggle("highlight");
}
function setSize(newSize){
    currentSize = newSize;
    updateSizeInfo(newSize);
    newGrid(newSize);
}
function updateSizeInfo(newSize){
    pixelValue.innerHTML = `${newSize}x${newSize}`;
}
function newGrid(newSize){
    clearGrid();
    setupGrid(newSize);
}
function clearGrid(){
    grid.innerHTML = ""
    setupGrid(currentSize);
}
function setupGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i=0; i<size*size; i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square")
        gridSquare.addEventListener("mouseover", paintGrid);
        grid.appendChild(gridSquare);
    }
}
function paintGrid(e){
    if(e.type == "mouseover" && !mouseDown){return;}
    if(currentMode == "color"){e.target.style.backgroundColor = currentColor;}
    if(currentMode == "eraser"){e.target.style.backgroundColor = "#fefefe";}
}
window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}