/* Destrava — interações da landing page */
(function () {
  "use strict";

  /* Reveal on scroll */
  var items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  items.forEach(function (el) { io.observe(el); });

  /* Placeholder da VSL — troque pelo embed real (YouTube/Vimeo/player) */
  var play = document.querySelector(".vsl-play");
  if (play) {
    play.addEventListener("click", function () {
      // Exemplo: substituir o placeholder pelo iframe da sua VSL.
      // var vsl = document.querySelector(".vsl");
      // vsl.innerHTML = '<iframe ...></iframe>';
      console.info("Conecte aqui o player da sua VSL (formato 9:16).");
    });
  }
})();
