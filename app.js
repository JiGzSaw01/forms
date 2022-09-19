const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const submit = document.getElementById('submit-button');

//todo
// password/confirm password validation by clicking a button

submit.addEventListener('click', (e) => {
    if (password.value !== confirmPassword.value) {
        alert('Password do not match')
    }
})