import "./header.scss";
export function onLoad() {
  document
    .querySelectorAll(".navbar-nav .dropdown")
    .forEach(function (dropdown) {
      let parentLink = dropdown.querySelector("a.nav-link");

      // Desktop hover
      dropdown.addEventListener("mouseenter", function () {
        if (window.innerWidth >= 768) {
          dropdown.classList.add("show");
          dropdown
            .querySelectorAll("ul.dropdown-menu")
            .forEach(function (menu) {
              menu.classList.add("show");
            });
        }
      });

      dropdown.addEventListener("mouseleave", function () {
        if (window.innerWidth >= 768) {
          dropdown.classList.remove("show");
          dropdown
            .querySelectorAll("ul.dropdown-menu")
            .forEach(function (menu) {
              menu.classList.remove("show");
            });
        }
      });

      // Click handling for desktop + mobile
      if (parentLink) {
        parentLink.addEventListener("click", function (e) {
          if (window.innerWidth >= 768) {
            window.location = this.href;
          } else {
            // Mobile two-tap logic
            /*
            if (!dropdown.classList.contains("show")) {
              e.preventDefault();
              dropdown.classList.add("show");
              dropdown
                .querySelectorAll("ul.dropdown-menu")
                .forEach(function (menu) {
                  menu.classList.add("show");
                });
            } else {
              e.stopPropagation();
              window.location = this.href;
            }
            */
          }
        });
      }
    });

  // 🔹 Add scroll effect for header background
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}

// set onLoad
window.addEventListener("DOMContentLoaded", onLoad);
