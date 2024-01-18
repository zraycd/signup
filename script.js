const passwordField = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm')
const button = document.querySelector('button')
const pwMismatchMessage = document.querySelector('#pw');

button.addEventListener('click', () => {

    if (passwordField.value !== confirmPassword.value) {
        passwordField.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        pwMismatchMessage.classList.remove('hidden');
    } else {
        passwordField.classList.remove('invalid');
        confirmPassword.classList.remove('invalid');
        pwMismatchMessage.classList.add('hidden');
    }
});
