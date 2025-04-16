window.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");

  function animateHero() {
    hero.classList.remove("opacity-0", "translate-y-10");
    hero.classList.add("opacity-100", "translate-y-0");
  }

  setTimeout(animateHero, 100);
});
