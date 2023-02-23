const categEl = document.querySelector(`#categories`);
const itemEl = categEl.querySelectorAll(`li.item`);
console.log(`Number of categories: ${itemEl.length}`);

for(const i of itemEl){
    const nameEl = i.querySelector(`h2`);
    console.log(`Category: ${nameEl.textContent}`);

    const listEl = i.querySelector(`ul`);
    console.log(`Elements: ${listEl.children.length}`);
}
