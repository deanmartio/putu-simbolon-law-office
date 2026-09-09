// Putu Simbolon Law Office — shared behavior

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      var isOpen = header.getAttribute("data-nav-open") === "true";
      header.setAttribute("data-nav-open", String(!isOpen));
      navToggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  // Contact Us dropdown — supports multiple instances per page
  var contacts = document.querySelectorAll(".contact");
  contacts.forEach(function (el) {
    var toggle = el.querySelector(".contact-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = el.getAttribute("data-open") === "true";
      // close any other open contact panels first
      contacts.forEach(function (other) {
        if (other !== el) other.setAttribute("data-open", "false");
      });
      el.setAttribute("data-open", String(!isOpen));
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  // Click outside closes any open contact panel
  document.addEventListener("click", function (e) {
    contacts.forEach(function (el) {
      if (!el.contains(e.target)) {
        el.setAttribute("data-open", "false");
      }
    });
  });

  // Escape key closes open panels / mobile nav
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      contacts.forEach(function (el) {
        el.setAttribute("data-open", "false");
      });
      if (header) header.setAttribute("data-nav-open", "false");
    }
  });
});
