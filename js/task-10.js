function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const render = document.querySelector('[data-action="render"]');
// const destroy = document.querySelector('[data-action="destroy"]');
// const boxes = document.getElementById("#boxes");
// render.addEventListener("click", getAmount);
// destroy.addEventListener("click", destroyBoxes);

// function getAmount() {
//   let amount = +document.querySelector("#controls input").value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   const basicSize = 30;
//   const fragment = document.createDocumentFragment();
//   for (var i = 0; i < amount; i++) {
//     let size = basicSize + i * 10;
//     const div = document.createElement("div");
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }

const divBox = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

input.addEventListener('click', onInputValue);

function onInputValue(event) {
  console.log('value', input.value);
}
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  divBox.innerHTML = '';
  input.value = '';
}
  
function createBoxes(amount) {
  amount = input.value;
  for (let i = 0; i < amount; i += 1) {
    const boxes = document.createElement('div');
    const boxStyle = 30 + i * 10;
    boxes.style = `width: ${boxStyle}px; height: ${boxStyle}px; background-color: ${getRandomHexColor(boxes.style.backgroundColor)}`
    


    divBox.append(boxes);
console.log(boxes);
  }
}
