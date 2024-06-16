document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const floatingSession = document.getElementById('floating-session');
    const sessionUsername = document.getElementById('session-username');

    // Show login form
    document.getElementById('show-login').addEventListener('click', function(event) {
        event.preventDefault();
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Show signup form
    document.getElementById('show-signup').addEventListener('click', function(event) {
        event.preventDefault();
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    });

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            const response = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data));
                sessionUsername.textContent = data.username;
                document.getElementById('login-success-message').textContent = 'Login successful!';
                document.getElementById('login-success-message').style.display = 'block';
                floatingSession.style.display = 'block';
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 2000);
            } else {
                const errorData = await response.json();
                document.getElementById('login-error-message').textContent = errorData.message;
                document.getElementById('login-error-message').style.display = 'block';
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('login-error-message').textContent = 'An error occurred. Please try again.';
            document.getElementById('login-error-message').style.display = 'block';
        }
    });

    // Handle signup form submission
    document.getElementById('signup-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data));
                sessionUsername.textContent = data.username;
                document.getElementById('signup-success-message').textContent = 'Signup successful!';
                document.getElementById('signup-success-message').style.display = 'block';
                floatingSession.style.display = 'block';
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 2000);
            } else {
                const errorData = await response.json();
                document.getElementById('signup-error-message').textContent = errorData.message;
                document.getElementById('signup-error-message').style.display = 'block';
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('signup-error-message').textContent = `An error occurred: ${error.message}`;
            document.getElementById('signup-error-message').style.display = 'block';
        }
    });

    // Handle logout
    document.getElementById('logout').addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        floatingSession.style.display = 'none';
        window.location.href = '/';
    });

    // Check for existing session
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        sessionUsername.textContent = user.username;
        floatingSession.style.display = 'block';
    }
});
