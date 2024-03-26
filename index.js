const form = document.querySelector('form');
const password  = document.querySelector('#pass');
const confirmPassword  = document.querySelector('#confirm-pass');
const passwordImg  = document.querySelector('#pass-img');
const confirmPasswordImg  = document.querySelector('#confirm-pass-img');
const email = document.querySelector('#email');
const submit = document.querySelectorAll('submit');



email.addEventListener('input', (event) => {
  if(email.validity.valueMissing){
    email.setCustomValidity ('Please enter an email address');
    email.style.borderColor = 'darkred';
  }else if (email.validity.typeMismatch){
    email.setCustomValidity ('Please enter a valid email address.');
    email.style.borderColor = 'darkred';
  } else {
    email.setCustomValidity('');
    email.style.borderColor = ''; // Reset border color if input is valid
  }
});


password.addEventListener('input', (event) => {
  if (password.validity.patternMismatch) {
    password.setCustomValidity(`Password should include at least one of the following:
                                * From 8 to 16 characters.
                                * One upper case letter.
                                * One lower case letter.
                                * One number from 0 - 9.
                                * One special character.`);
  }else {
    password.setCustomValidity('');
  }
});


confirmPassword.addEventListener('input', (event) => {
  if(confirmPassword.validity.valueMissing){
    confirmPassword.setCustomValidity('Please confirm the password');
    confirmPassword.style.borderColor = 'darkred';
  }else if(password.value !== confirmPassword.value){
    confirmPassword.setCustomValidity('Passwords do not match');
    confirmPassword.style.borderColor = 'darkred';
    password.style.borderColor = 'darkred';
  }else{
    confirmPassword.setCustomValidity('');
    confirmPassword.style.borderColor = '';
    password.style.borderColor = '';
  }
});




 //hide/unhide password
passwordImg.addEventListener('click', () => {
  if(password.value === ''){
    passwordImg.src = 'images/unhide.png';
  }else if(password.type === 'password'){
    password.type = 'text';
    passwordImg.src = 'images/hide.png';
  }else if (password.type === 'text'){
    password.type = 'password';
    passwordImg.src = 'images/unhide.png';
  }
});

confirmPasswordImg.addEventListener('click', () => {
  if(confirmPassword.value === ''){
    confirmPasswordImg.src = 'images/unhide.png';
  }else if(confirmPassword.type === 'password'){
    confirmPassword.type = 'text';
    confirmPasswordImg.src = 'images/hide.png';
  }else if (confirmPassword.type === 'text'){
    confirmPassword.type = 'password';
    confirmPasswordImg.src = 'images/unhide.png';
  }
});






form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission behavior
  
  // Check form validity before processing
  if (form.checkValidity()) {
    // Collect form data
    const formData = new FormData(form);

    // You can access form data and perform actions based on it
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
      // You can perform actions based on form data, such as displaying it in the console
    });

    // You can also reset the form after processing
    form.reset();
  }
});