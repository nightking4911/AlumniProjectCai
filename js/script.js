// Hardcoded user credentials
const validEmail = "123@gmail.com";
const validPassword = "123@gmail.com";

// Check if the user is logged in
function checkLogin() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    window.location.href = "dashboard.html"; // Redirect to dashboard if already logged in
  }
}

// Login Function
function login(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === validEmail && password === validPassword) {
    localStorage.setItem("isLoggedIn", "true"); // Set login status in localStorage
    window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

// Logout Function
function logout() {
  localStorage.removeItem("isLoggedIn"); // Clear login status
  window.location.href = "index.html"; // Redirect to homepage
}

// Redirect to Dashboard if Logged In
function redirectIfLoggedIn() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    window.location.href = "dashboard.html";
  }
}

// Attach Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Check login status on homepage
  if (window.location.pathname.includes("index.html")) {
    checkLogin();
  }

  // Login Form Submission
  if (window.location.pathname.includes("login.html")) {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", login);
    }
  }

  // Logout Button
  if (window.location.pathname.includes("dashboard.html")) {
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
      logoutButton.addEventListener("click", logout);
    }
  }
});