const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
const gridSize = document.getElementById("sizePicker");
const grid = document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker");

gridSize.addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid(gridHeight.value, gridWidth.value)
});


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
