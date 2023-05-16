const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector(`ul#ingredients`);
// за допомогою методу мап отримуємо масив зі створеними лішками 
const ingredientArr = ingredients.map(el => {
  const itemEl = document.createElement(`li`);
  // додаємо лішкі у список з текстовим контекстом
  itemEl.classList.add(`item`);
  itemEl.textContent = el;
  return itemEl;
})
// і додаємо у список 
listIngredients.append(...ingredientArr);