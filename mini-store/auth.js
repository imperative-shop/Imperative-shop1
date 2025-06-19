function signup() {
  const user = document.getElementById("signup-username").value;
  const pass = document.getElementById("signup-password").value;
  localStorage.setItem("user", JSON.stringify({ user, pass }));
  alert("Account created");
  window.location.href = "login.html";
}

function login() {
  const user = document.getElementById("login-username").value;
  const pass = document.getElementById("login-password").value;
  const saved = JSON.parse(localStorage.getItem("user"));

  if (saved && user === saved.user && pass === saved.pass) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", user);
    window.location.href = "index.html";
  } else {
    alert("Invalid login");
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  } else {
    document.getElementById("user").innerText = "Welcome, " + localStorage.getItem("username");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
