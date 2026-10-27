// Lingua del sito: inglese o italiano. Segue il browser, il pulsante la cambia e se la ricorda.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("lbg-lang"); } catch (e) {}
  var nav = (navigator.language || "en").toLowerCase();
  var lang = saved || (nav.indexOf("it") === 0 ? "it" : "en");
  function apply(l) {
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l);
    var b = document.getElementById("lang-btn");
    if (b) b.textContent = l === "it" ? "EN" : "IT";
  }
  apply(lang);
  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    var b = document.getElementById("lang-btn");
    if (b) b.addEventListener("click", function () {
      lang = lang === "it" ? "en" : "it";
      try { localStorage.setItem("lbg-lang", lang); } catch (e) {}
      apply(lang);
    });
  });
})();
