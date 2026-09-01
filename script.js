const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item) => revealObserver.observe(item));

const navLinks = [...document.querySelectorAll(".site-nav a")];
const siteHeader = document.querySelector(".site-header");
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveNav = (sectionId) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
};

const updateHeaderState = () => {
  siteHeader.classList.toggle("scrolled", window.scrollY >= window.innerHeight * 0.72);
};

const navObserver = new IntersectionObserver(
  (entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visibleSection) setActiveNav(visibleSection.target.id);
  },
  { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.2, 0.5] },
);

navSections.forEach((section) => navObserver.observe(section));
setActiveNav(null);

window.addEventListener(
  "scroll",
  () => {
    updateHeaderState();
    if (window.scrollY < 120) setActiveNav(null);
  },
  { passive: true },
);
updateHeaderState();

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveNav(link.getAttribute("href").slice(1));
  });
});
