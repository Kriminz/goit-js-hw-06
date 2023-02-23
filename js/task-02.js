const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector(`#ingredients`)

for(const i of ingredients){
  let elem = document.createElement("li");
  elem.classList.add(`item`);
  elem.textContent = i;
  listEl.append(elem);
}