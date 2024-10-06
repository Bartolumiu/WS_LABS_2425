document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let username = document.getElementById('user');
        let password = document.getElementById('pass');
        
        console.log('Username: ' + username.value);
        console.log('Password: ' + password.value);
    })
});