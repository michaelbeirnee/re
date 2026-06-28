// Theme toggle: cycles between system default, light, and dark.
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme");

  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function current() {
    const attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Project hover previews — follow cursor
(function () {
  document.querySelectorAll(".proj-item").forEach(function (item) {
    var preview = item.querySelector(".proj-preview");
    if (!preview) return;

    item.addEventListener("mouseenter", function () {
      preview.classList.add("visible");
    });
    item.addEventListener("mouseleave", function () {
      preview.classList.remove("visible");
    });
    item.addEventListener("mousemove", function (e) {
      preview.style.left = e.clientX + "px";
      preview.style.top  = e.clientY + "px";
    });
  });
})();