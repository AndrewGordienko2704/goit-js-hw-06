function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');


changeColorBtn.addEventListener('click', () => { 
  const body = document.querySelector('body');
  body.style.backgroundColor = getRandomHexColor();
  const changeColor = document.querySelector('.color');
  // changeColor.textContent = getRandomHexColor();
  changeColor.textContent = body.style.backgroundColor;
});