const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

let item = [];

for (const ingredient of ingredients) {
  const newItem =
  document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent = ingredient;
  item.push(newItem);
  // item = [{ li }, { li }, ...];
  console.log(item);
}

list.append(...item);
