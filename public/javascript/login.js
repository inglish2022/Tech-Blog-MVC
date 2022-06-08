async function loginFormHandler(event) {
    event.preventDefault();
    console.log('working')
    const username = document.querySelector('#username-login').value.trim();
    
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        // .then(function() {
        //     document.location.replace('/dashboard');
    // });

    if (response.ok)  {
        document.location.replace('/dasboard');
    } else {
        alert(response.statusText)
    }
    // .catch(err => console.log(err));

};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler)};