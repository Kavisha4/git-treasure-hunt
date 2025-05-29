function toggleTheme() {
    const body = document.body;
    const isDark = body.style.backgroundColor === "black";
    if (isDark) {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    } else {
      body.style.backgroundColor = "black";
      body.style.color = "white";
    }
  }
 
// Login validation
function validateLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const messageBox = document.getElementById("message");

  if (user === "" || pass === "") {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  if (user === "admin" && pass === "password123") {
    showMessage("Login successful!", "success");
  } else {
    showMessage("Invalid username or password.", "error");
  }
}

function showMessage(msg, type) {
  const messageBox = document.getElementById("message");
  messageBox.innerText = msg;
  messageBox.className = `message-box ${type}`;
  messageBox.style.display = "block";
}
