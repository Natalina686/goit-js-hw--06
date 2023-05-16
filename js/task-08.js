const logForm = document.querySelector('.login-form');
logForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(data) {
data.preventDefault();
const { email, password } = data.currentTarget.elements;
!email.value.trim() || !password.value.trim() ?
   alert('Please fill in all the fields!') : () => {
    formData ( {
      email: email.value,
      password: password.value,
    } )
// console.log(formData());
    data.currentTarget.reset();
  }
}
