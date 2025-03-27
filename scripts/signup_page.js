
        // Function to toggle password visibility
        function togglePassword(id, icon) {
            const passwordInput = document.getElementById(id);
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        }

        // Form validation
        document.getElementById('signupForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirmPassword');
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            const signupSuccess = document.getElementById('signupSuccess');

            let isValid = true;

            // Email validation
            if (emailInput.value === '') {
                emailError.style.display = 'block';
                emailError.textContent = 'Please enter an email address.';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            // Password validation
            if (passwordInput.value.length < 6) {
                passwordError.style.display = 'block';
                passwordError.textContent = 'Password must be at least 6 characters long.';
                isValid = false;
            } else {
                passwordError.style.display = 'none';
            }

            // Confirm Password validation
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordError.style.display = 'block';
                confirmPasswordError.textContent = 'Passwords must match.';
                isValid = false;
            } else {
                confirmPasswordError.style.display = 'none';
            }

            // If valid, show success message and redirect
            if (isValid) {
                signupSuccess.style.display = 'block';
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 1000); // Redirect after 1 second to allow success message display
            }
        });