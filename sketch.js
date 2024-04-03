let container = document.getElementsByClassName("container")[0];
for (let i = 0; i < 256; i++) {
    let grid = document.createElement("div");
    grid.style.width = "45px";
    grid.style.height = "45px";
    container.appendChild(grid);
}

//create event listener so mouse hover leads to permanent color change
container.addEventListener('mouseover', e => {
    let target = e.target
  
    if (target !== container) {
      target.classList.add('permahover');
    }
  });

//create event listener to personalize grid squares
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let inputVal = prompt("Enter number of squares per side for new grid (max 100)");
  if (inputVal < 1 || inputVal > 100 || isNaN(inputVal)) {
    window.alert("Invalid entry");
  } else {
   container.innerHTML = "";
    for (let i = 0; i < inputVal * inputVal; i++) {
      let newGrid = document.createElement("div");
      newGrid.classList.add("new");
      newGrid.style.width = `${720 / inputVal}px`;
      newGrid.style.height = `${720 / inputVal}px`;
      container.appendChild(newGrid);
  }
  }
})