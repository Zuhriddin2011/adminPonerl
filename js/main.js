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
const modeToggle = document.querySelector(".mode");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("darkMode", body.classList.contains("dark"));
});


if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark");
}
