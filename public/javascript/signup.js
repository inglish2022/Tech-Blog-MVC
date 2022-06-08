async function signupFormHandler(event) {
    event.preventDefault();
    console.log('hello')
    const username = document.querySelector('#username-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log(username, email, password)
    if (username && email && password) {
        console.log('signup error')
        const response = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok)  {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
            // .then(function () {
            //     document.location.replace('/dashboard');
            // })
            // .catch(err => console.log(err));

    };


};
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler)