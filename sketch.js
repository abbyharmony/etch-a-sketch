let container = document.getElementsByClassName("container")[0];
for (let i = 0; i < 256; i++) {
    let grid = document.createElement("div");
    container.appendChild(grid);
}

container.addEventListener('mouseover', e => {
    let target = e.target
  
    if (target !== container) {
      target.classList.add('permahover');
    }
  });

  