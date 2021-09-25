// array and tags

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
      buttons_div: document.querySelector("#buttons"),
      button_start: document.querySelector('.js_start'),
      button_stop: document.querySelector('.js_stop'),
      body: document.querySelector('.body')
  }

// code

refs.button_stop.disabled = true;


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomColor;
function setNewColor() {
    randomColor = colors[randomIntegerFromInterval(0, 5)];
    refs.body.removeAttribute("style");
    refs.body.setAttribute("style", `background-color: ${randomColor}`);
};

let colorInerval;


refs.buttons_div.addEventListener('click', (event, randomColor) => {
    if (event.target.textContent == "Start") {
        refs.button_start.disabled = true;
        colorInerval = setInterval(setNewColor, 1000);
        refs.button_stop.disabled = false;
    } 
    
    else if (event.target.textContent == "Stop") {
        // refs.button_stop.disabled = false;
        refs.button_stop.disabled = true;
        clearInterval(colorInerval);
        refs.button_start.disabled = false;
    }
})

