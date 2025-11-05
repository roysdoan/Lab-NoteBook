// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let uInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector("#output");

console.log(copy);

// add an event listener on the target element
copy.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
  output.textContent = uInput.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let uInput2 = document.querySelector("#userInput2");
// add an event listener on the target element

uInput2.addEventListener("input", handleCinput);

let section = document.querySelector("#inputEventExample");
let element = document.createElement("div");
element.setAttribute("class", "output");

section.append(element);
// callback function to handle event
function handleCinput(event) {
  console.log(uInput2.value);
  element.textContent = uInput2.value;
}
