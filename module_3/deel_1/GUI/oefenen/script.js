function redirectToLoginPage() {
    window.location.href = 'login.html';
  }
  
  function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    // Add your own login logic here
    if (username === '123' && password === '456') {
      errorMessage.textContent = '';
      alert('Login successful!');
    } else {
      errorMessage.textContent = 'Invalid username or password';
    }
  }
  