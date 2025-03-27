// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-icon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Form validation
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginSuccess = document.getElementById('loginSuccess');

    // Define correct credentials
    const correctEmail = 'gagguturutajkamal06@gmail.com';
    const correctPassword = '123456';

    let isValid = true;

    // Email validation
    if (emailInput.value !== correctEmail) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password validation
    if (passwordInput.value !== correctPassword) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // If credentials are correct, redirect to home.html
    if (isValid) {
        loginSuccess.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000); // Redirect after 1 second to allow success message display
    }
});