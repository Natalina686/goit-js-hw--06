const wrapButton = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector('#value'),
    wrapper: document.querySelector('#counter '),
  };
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
    wrapButton.span.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    wrapButton.span.textContent = counterValue;
  };
  wrapButton.sub.addEventListener('click', increment);
  wrapButton.add.addEventListener('click', decrement);
