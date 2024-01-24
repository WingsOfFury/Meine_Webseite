import Swup from "swup";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupA11yPlugin from "@swup/a11y-plugin";

// Hier holt er sich die ID "top-top-button"
let toTopButton = document.getElementById("to-top-button");

// Checkt ob der Button existiert
if (toTopButton) {
  // Scroll event, toggle button wird erst sichtbar wenn nach unten gescrollt wird
  window.onscroll = function () {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      toTopButton.classList.remove("hidden");
    } else {
      toTopButton.classList.add("hidden");
    }
  };

  // Funktion um "smooth" BackToTop zu gelangen
  window.goToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

// pageHandler ist die Klasse, die alle Funktionen enthält, die auf der Seite ausgeführt werden sollen.
class PageHandler {
  // der Konstruktor wird beim Erstellen einer neuen Instanz der Klasse ausgeführt.
  constructor() {
    // Hier werden alle Funktionen aufgerufen, die beim Laden der Seite ausgeführt werden sollen.
    // Wenn im localStorage der Wert "theme" auf "dark" gesetzt ist, wird der Klasse "dark" auf dem HTML-Element hinzugefügt.
    if (localStorage.getItem("theme") == "dark") {
      document.documentElement.classList.add("dark");
    }

    // Initiale Funktionen welche beim Laden der Seite ausgeführt werden sollen.
    this.setThemeIcon();
    this.typeWriterManager();

    // Event-Listener für den Dark-Mode-Switch
    // Bei Klick auf den Switch wird die Klasse "dark" auf dem HTML-Element hinzugefügt oder entfernt.
    document.querySelector("#themeToggle").addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "");
      } else {
        localStorage.setItem("theme", "dark");
      }

      this.setThemeIcon();
    });
  }

  // Diese Funktion setzt das Icon für den Dark-Mode-Switch.
  setThemeIcon() {
    let colorSwitch = document.querySelector("#themeToggle");
    if (colorSwitch === null) return;

    if (localStorage.getItem("theme") == "dark") {
      colorSwitch.innerHTML = `
        <img src="/icons/sun.svg?a=${Math.random()}" alt="sun" class="w-6 h-6" />
      `;
    } else {
      colorSwitch.innerHTML = `
        <img src="/icons/moon.svg?a=${Math.random()}" alt="sun" class="w-6 h-6" />
      `;
    }
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
        setTimeout(typeWriter, 3000);
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
