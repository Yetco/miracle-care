<<<<<<< HEAD
// Extracted from index.html <script> block
// Page Navigation
function navigateTo(page) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => p.classList.remove("active"));

  // Show selected page
  document.getElementById(page + "-page").classList.add("active");

  // Update active nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");

  // Close mobile menu if open
  document.getElementById("nav").classList.remove("active");

  // Scroll to top
  window.scrollTo(0, 0);
}

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// Update active nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Extracted from index.html <script> block
// Page Navigation
function navigateTo(page) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => p.classList.remove("active"));

  // Show selected page
  document.getElementById(page + "-page").classList.add("active");

  // Update active nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");

  // Close mobile menu if open
  document.getElementById("nav").classList.remove("active");

  // Scroll to top
  window.scrollTo(0, 0);
}

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// Update active nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
>>>>>>> ca57c0bd83608ce2140e1654ad20c10b7655657a
