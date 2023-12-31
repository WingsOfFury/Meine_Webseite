import Swup from "swup";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupA11yPlugin from "@swup/a11y-plugin";

// document.querySelector(".hamburger").addEventListener("click", () => {
//   document.querySelector(".nav-links").classList.toggle("expanded");
// });

// pageHandler ist die Klasse, die alle Funktionen enthält, die auf der Seite ausgeführt werden sollen.
class PageHandler {
  constructor() {
    this.typeWriterManager();
  }

  // Diese Funktion verwaltet einen Typewriter-Effekt für ein beliebiges Element.
  // Es werden die Wörter aus dem Array "dynamicHeaderTextArray" nacheinander in das Element geschrieben.
  typeWriterManager() {
    let dynamicHeaderElement = document.querySelector("#dynamic-header-text");
    if (dynamicHeaderElement === null) return;

    let dynamicHeaderTextArray = ["Eat", "Sleep", "Code", "Repeat"];
    let i = 0;
    let currentText = dynamicHeaderTextArray[i];
    let currentWord = dynamicHeaderTextArray[i];
    let isDeleting = false;

    // Diese Funktion schreibt die Wörter aus dem Array "dynamicHeaderTextArray" nacheinander in das Element oder löscht sie wieder.
    // Nach jedem Durchlauf wird die Funktion erneut aufgerufen. Bei einem Durchlauf wird ein Buchstabe hinzugefügt oder gelöscht.
    // Je nach Situation wird die Funktion nach einem bestimmten Timeout erneut aufgerufen.
    let typeWriter = () => {
      currentWord = dynamicHeaderTextArray[i];

      if (isDeleting) {
        currentText = currentWord.substring(0, currentText.length - 1);
      }

      if (!isDeleting) {
        currentText = currentWord.substring(0, currentText.length + 1);
      }

      dynamicHeaderElement.innerHTML = currentText;

      if (!isDeleting && currentText === currentWord) {
        isDeleting = true;
        setTimeout(typeWriter, 2000);
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        i++;

        if (i === dynamicHeaderTextArray.length) {
          i = 0;
        }

        setTimeout(typeWriter, 500);
      } else {
        setTimeout(typeWriter, 100);
      }
    };

    typeWriter();
  }
}

// Diese Funktion erstellt eine neue Instanz der Klasse PageHandler.
const init = () => {
  new PageHandler();
};

// Die Funktion init() wird ausgeführt, wenn der DOM geladen wurde.
document.addEventListener("DOMContentLoaded", () => init());

// Swup Page Transition
var swup = new Swup({
  animationSelector: '[class*="swup-transition-"]',
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), new SwupScrollPlugin()],
});

swup.hooks.on("content:replace", () => init());

// swup.on("contentReplaced", init);
