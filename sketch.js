let container = document.getElementsByClassName("container")[0];
let isRandomized = false;

//create grid squares
for (let i = 0; i < 256; i++) {
    let grid = document.createElement("div");
    grid.className = "grid";
    grid.style.width = "45px";
    grid.style.height = "45px";
    container.appendChild(grid);
}

//Add randomization
let random = document.getElementById("random");
let grids = document.getElementsByClassName("grid");
random.addEventListener("click", () => {
    isRandomized = true;
});

//create event listener for color change
container.addEventListener('mouseover', e => {
  let target = e.target;

  if (target.classList.contains('grid')) {
      if (isRandomized) {
          let colors = ["#ff0000", "#ff7300", "#fffb00", "#48ff00", "#00ffd5", "#002bff", "#7a00ff", "#ff00c8"];
          let randomColor = colors[Math.floor(Math.random() * colors.length)];
          target.style.backgroundColor = randomColor;
      } else {
          target.style.backgroundColor = "red"; 
      }
      target.classList.add('permahover'); 
  }
});

//create event listener to choose number of grid squares
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  isRandomized = false;
  let inputVal = prompt("Enter number of squares per side for new grid (max 100)");
  if (inputVal < 1 || inputVal > 100 || isNaN(inputVal)) {
    window.alert("Invalid entry");
  } else {
   container.innerHTML = "";
    for (let i = 0; i < inputVal * inputVal; i++) {
      let newGrid = document.createElement("div");
      newGrid.className = "grid";
      newGrid.classList.add("new");
      newGrid.style.width = `${720 / inputVal}px`;
      newGrid.style.height = `${720 / inputVal}px`;
      container.appendChild(newGrid);
    }
  }
});



 




    
   