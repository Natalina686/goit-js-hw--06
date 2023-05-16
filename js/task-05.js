const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (element) =>  output.textContent = !element.currentTarget.value ? "Anonymous" : element.currentTarget.value);