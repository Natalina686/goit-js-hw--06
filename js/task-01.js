const categories = document.querySelector("#categories");
// створюємо доступ до списку за допомогою id
const list = categories.querySelectorAll(".item");
// створюємо доступ до лішок за допомогою класу
console.log(`Number of categories: ${list.length}.`);
// виводимо у консоль кількість лішок
list.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    // перебираємо кожен елемент за змістом
    const lies = item.querySelectorAll("li").length;
    // виводімо кількість підкатегорій 
    console.log(`Category: ${title}.`);
    console.log(`Elements: ${lies}.`); 
})