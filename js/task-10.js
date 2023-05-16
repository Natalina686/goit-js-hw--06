function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// отримуємо доступ до діву інпуту батонів
const controls = document.querySelector('controls');
const inputNumber = document.querySelector('[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxes = document.getElementById('boxes');

// задаємо стилів нашим боксам
divBoxes.style.display = 'flex';
divBoxes.style.flexWrap = 'wrap';
divBoxes.style.margin = '30px';

createBtn.addEventListener('click', () => {
// створюємо подію на клік
  if (
    // якщо інпут більшій за максімум або менше одиниці - попередження!
    Number(inputNumber.value.trim()) > Number(inputNumber.max) ||
    Number(inputNumber.value.trim()) < Number(inputNumber.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(inputNumber.value.trim());
    // якщо інпут валідний - створюємо бокси
  }
  inputNumber.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);
// оновлюємо дів з боксами(прибираємо значення інпуту і самі бокси )
function destroyBoxes() {
  inputNumber.value = '';
  divBoxes.innerHTML = '';
}

function createBoxes(quantity) {
  // створюємо змінну для розміру
    let defaultSize = 30;
    // массив для боксів
    const boxesArr = [];
    // запускаємо цикл з умовою - кожний наступний більше за розміром
    for (let i = 0; i < quantity; i += 1) {
      defaultSize += 10;
      const div = document.createElement('div');
      // створюємо дів відповідний умові з рандомним кольором
      div.classList = 'item';
      div.style.width = `${defaultSize}px`;
      div.style.height = `${defaultSize}px`;
      div.style.margin = '30px';
      div.style.backgroundColor = getRandomHexColor();
      // пушимо в масив
      boxesArr.push(div);
    }
    // виводимо результат
    return divBoxes.append(...boxesArr);
  }
  