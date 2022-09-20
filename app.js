const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const submit = document.getElementById('submit-button');

//this block of code will validate the password against the confirm pass word
submit.addEventListener('click', (e) => {
    if (password.value !== confirmPassword.value) {
        alert('Password do not match')
    }
})