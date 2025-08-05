// Signup validation
function validateSignup() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;
  const error = document.getElementById('error-msg');

  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  if (!emailRegex.test(email)) {
    error.textContent = "Enter a valid email address.";
    return false;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return false;
  }

  if (password !== confirm) {
    error.textContent = "Passwords do not match.";
    return false;
  }

  error.textContent = "";
  return true;
}

// Login validation
function validateLogin() {
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document.querySelector('input[name="password"]').value;
  const error = document.getElementById('login-error');

  if (!email || !password) {
    error.textContent = "Please enter both email and password.";
    return false;
  }

  error.textContent = "";
  return true;
}
