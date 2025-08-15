// --- Mobile nav toggle ---
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// --- Highlight current nav link (underline active) ---
(function () {
  // filename without path; default to index.html
  const path = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav ul li a").forEach((link) => {
    // ignore hashes & queries for comparison
    const href = (link.getAttribute("href") || "")
      .split("#")[0]
      .split("?")[0];

    if (href === path) {
      link.classList.add("active");
    }
  });
})();
