// Lingua del sito: 10 lingue (en it es fr de pt ru tr ja ko). Segue il browser, il menu la cambia e se la ricorda.
// Le pagine che hanno solo inglese e italiano (privacy) mostrano l'inglese per le altre lingue.
(function () {
  var CODES = ["en", "it", "es", "fr", "de", "pt", "ru", "tr", "ja", "ko"];
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("lbg-lang"); } catch (e) {}
  var nav = (navigator.language || "en").toLowerCase().slice(0, 2);
  var lang = CODES.indexOf(saved) >= 0 ? saved : (CODES.indexOf(nav) >= 0 ? nav : "en");
  function apply(l) {
    var shown = l;
    if (document.body && !document.body.querySelector('[lang="' + l + '"]')) shown = "en";
    root.setAttribute("data-lang", shown);
    root.setAttribute("lang", shown);
    var s = document.getElementById("lang-sel");
    if (s) s.value = l;
    var b = document.getElementById("lang-btn");
    if (b) b.textContent = shown === "it" ? "EN" : "IT";
  }
  apply(lang);
  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    var s = document.getElementById("lang-sel");
    if (s) s.addEventListener("change", function () {
      lang = s.value;
      try { localStorage.setItem("lbg-lang", lang); } catch (e) {}
      apply(lang);
    });
    var b = document.getElementById("lang-btn");
    if (b) b.addEventListener("click", function () {
      lang = root.getAttribute("data-lang") === "it" ? "en" : "it";
      try { localStorage.setItem("lbg-lang", lang); } catch (e) {}
      apply(lang);
    });
  });
})();
