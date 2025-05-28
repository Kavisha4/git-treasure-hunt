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
  