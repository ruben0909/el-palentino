export function initMenuToggle() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (!button || !nav) {
    return;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    nav.classList.toggle("is-open", !isExpanded);
  });
}

export function markCurrentNavigationLink() {
  const links = document.querySelectorAll(".site-nav a");
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

  links.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const linkPath = href.replace(/\/$/, "") || "/";

    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });
}
