
const items = document.querySelectorAll('.item');
console.log('Number of categories:', items.length);

const newArray = [...items].map(element => `Category: ${element.children[0].textContent} Elements: ${element.children[1].children.length}`).join('\n')
console.log(newArray);