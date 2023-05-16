const refSize = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');
function inputValue() {
refText.style.fontSize = refSize.value + 'px';
}

inputValue();

refSize.addEventListener('input', inputValue);