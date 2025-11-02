// Page Navigation
// navigateTo(page, triggerElement?) — navigates to page and updates active nav link.
function navigateTo(page, trigger) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => p.classList.remove("active"));

  // Show selected page
  const target = document.getElementById(page + "-page");
  if (target) target.classList.add("active");

  // Update active nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));

  // Prefer an explicitly passed trigger element
  if (trigger && trigger.classList) {
    trigger.classList.add("active");
  } else {
    // Try to find a nav-link whose onclick contains the page name
    const found = Array.from(navLinks).find((l) => {
      const onclick = l.getAttribute("onclick") || "";
      return (
        onclick.includes("navigateTo('" + page + "')") ||
        onclick.includes('navigateTo("' + page + '")')
      );
    });
    if (found) found.classList.add("active");
  }

  // Close mobile menu if open
  const nav = document.getElementById("nav");
  if (nav) nav.classList.remove("active");

  // Scroll to top
  window.scrollTo(0, 0);
}

function toggleMenu() {
  const nav = document.getElementById("nav");
  if (nav) nav.classList.toggle("active");
}

// Attach click listeners so the active state updates even when nav links are clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
