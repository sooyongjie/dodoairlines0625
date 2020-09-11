// display coordinates
displayText = (x, y) => {
    let here = document.createElement("span");
    here.textContent = "Here";
    here.style.position = "absolute";
    here.style.left = `${x-15}px`;  // fix location of 'Here' text
    here.style.top = `${y-10}px`;
    here.style.opacity = 0;
    box.appendChild(here);
    setTimeout(() => {  // fading animation
      here.style.opacity = 1;
    }, 50);
  }
  
  // get coordinates from event object
  showCoords = (event) => {
    let x = event.x;
    let y = event.y;
    let coords = "X: " + x + ", Y: " + y;
    text.innerHTML = coords;
    displayText(x, y)
    body.style.backgroundColor = `rgb(20, 20, 20)`; // change background color with fading animation
    box.style.backgroundColor = `rgb(50, 50, 50)`;
  };
  
  // clear all 'Here' text in div
  clearEl = () => {
    text.textContent = "Click on any part of the section below";
    box.querySelectorAll("*").forEach((n) => {
      n.style.opacity = 0; // fading animation when clearing 'here' text
      body.style.backgroundColor = `rgb(0, 0, 0)`; 
      box.style.backgroundColor = `rgb(30, 30, 30)`;
      setTimeout(() => { // wait animation to complete before removing
        n.remove();
      }, 500);
    });
  };
  
  // reload page on window resize
  reloadPage = () => {
    text.textContent = "Reloading page due to window resize";
    setTimeout(() => { // delay for user to read the message
      location.reload();
    }, 500);
  };
  
  const body = document.querySelector("#body");
  const box = document.querySelector("#box");
  const text = document.getElementById("demo");