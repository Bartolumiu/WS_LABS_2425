document.addEventListener('DOMContentLoaded', function() {
    let username = document.getElementById('user');
    username.value = 'user@email';
    let password = document.getElementById('pass');
    password.value = 'password';

    username.addEventListener('focus', function() { username.value = ''; }); // onFocus: Reset username
    password.addEventListener('focus', function() { password.value = ''; }); // onFocus: Reset password
    username.addEventListener('blur', function() { if (username.value === '') username.value = 'user@email'; }); // onBlur: Reset username if empty
    password.addEventListener('blur', function() { if (password.value === '') password.value = 'password'; }); // onBlur: Reset password if empty
});