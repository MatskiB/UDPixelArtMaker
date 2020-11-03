// variable for the element that determines the table's heigth
const gridHeight = document.getElementById("inputHeight");
// variable for the element that determines the table's width
const gridWidth = document.getElementById("inputWidth");
// variable for the form presented to the user that enables them to create a canvas
const gridSize = document.getElementById("sizePicker");
// variable for the canvas
const grid = document.getElementById("pixelCanvas");
// variable for the color picker tool
const color = document.getElementById("colorPicker");


// Event listener for the grid size that calls makeGrid function after
// receiving input from the user
gridSize.addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid(gridHeight.value, gridWidth.value)
});

// makeGrid function that creates a canvas for the user and listens to
// color input
function makeGrid(height, width) {
  grid.innerHTML = " ";
  for (let i = 0; i < height; i++) {
    let row = grid.insertRow(i);
    for (let x = 0; x < width; x++) {
      let cell = row.insertCell(x);
      cell.addEventListener("click", function(event) {
        cell.style.backgroundColor = color.value;
      });
    }
  }
}
