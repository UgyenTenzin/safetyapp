// validation.js
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            // Simple validation example
            if (username === "" || email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Additional validation logic can be added here
            // e.g., checking email format, password strength, etc.

            // If all validation passes, submit the form
            signupUser(username, email, password);
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            // Simple validation example
            if (email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Additional validation logic can be added here

            // If all validation passes, submit the form
            loginUser(email, password);
        });
    }
});

// Mock functions for signup and login (replace with actual API calls)
function signupUser(username, email, password) {
    console.log("Signing up user...");
    // Here you would typically make an AJAX request to the backend to sign up the user
}

function loginUser(email, password) {
    console.log("Logging in user...");
    // Here you would typically make an AJAX request to the backend to log in the user
}
