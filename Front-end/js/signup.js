document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

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
            document.getElementById('success-message').textContent = 'Signup successful!';
            document.getElementById('success-message').style.display = 'block';
            setTimeout(() => {
                window.location.href = '/dashboard'; // Redirect to the dashboard or desired page
            }, 2000); // Redirect after 2 seconds
        } else {
            const errorData = await response.json();
            document.getElementById('error-message').textContent = errorData.message;
            document.getElementById('error-message').style.display = 'block';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = 'An error occurred. Please try again.';
        document.getElementById('error-message').style.display = 'block';
    }
});
