const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener(
  "play",
  (event) => {
    if (!(event.target instanceof HTMLVideoElement)) return;

    document.querySelectorAll("video").forEach((video) => {
      if (video !== event.target) video.pause();
    });
  },
  true,
);
