const sidebarToggle = document.querySelector(".hamburger");
const sidebar = document.querySelector("nav");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

if (innerWidth <= 1000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}



document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.querySelector(".dark-mode-toggle");
  const body = document.body;

  
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
  }

  modeToggle.addEventListener("click", function () {
    body.classList.toggle("dark");

    
    if (body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
