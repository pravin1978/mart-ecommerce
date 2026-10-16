// ============================================
// DIGIMART — THEME MANAGER (LIGHT / DARK)
// ============================================
// Centralised theme handling for the whole site.
// No framework, no dependency — plain script, matching
// the project's existing architecture (see js/config.js).
//
// Behaviour:
//   1. On load, read the saved preference from localStorage.
//   2. If nothing is saved, respect the OS setting
//      (prefers-color-scheme: dark).
//   3. Fall back to "light" if storage is unavailable
//      (private mode, disabled cookies, etc.).
//   4. Persist the visitor's explicit choice.
//   5. Keep following OS changes while the visitor has
//      not made an explicit choice.
//
// A tiny inline snippet in each page <head> applies the
// theme synchronously (see applyDigimartThemeEarly) so there
// is no flash of the wrong theme before this file loads.
// ============================================

(function () {
  "use strict";

  var STORAGE_KEY = "digimart-theme";
  var THEMES = { LIGHT: "light", DARK: "dark" };

  // ---- Icons (inline SVG, matches the existing icon system) ----
  var ICON_SUN =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
    '<circle cx="12" cy="12" r="4"/>' +
    '<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>' +
    "</svg>";

  var ICON_MOON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
    '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>' +
    "</svg>";

  // ---- Storage helpers (fail silently when unavailable) ----
  function readStoredTheme() {
    try {
      var v = window.localStorage.getItem(STORAGE_KEY);
      return v === THEMES.DARK || v === THEMES.LIGHT ? v : null;
    } catch (e) {
      return null; // storage blocked — treat as "no saved choice"
    }
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
      return true;
    } catch (e) {
      return false; // storage blocked — theme still applies for this page view
    }
  }

  function systemPrefersDark() {
    try {
      return (
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch (e) {
      return false;
    }
  }

  // The theme that should currently be active.
  function resolveTheme() {
    return readStoredTheme() || (systemPrefersDark() ? THEMES.DARK : THEMES.LIGHT);
  }

  // Apply a theme to <html> and keep the browser chrome colour in step.
  function applyTheme(theme) {
    var root = document.documentElement;
    root.setAttribute("data-theme", theme);

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === THEMES.DARK ? "#101827" : "#ffffff");
    }

    return theme;
  }

  // Keep every toggle button on the page in sync.
  function syncToggles(theme) {
    var buttons = document.querySelectorAll(".theme-toggle");
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var isDark = theme === THEMES.DARK;
      // Accessible name states the ACTION, not the current state.
      btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      btn.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
      btn.innerHTML = isDark ? ICON_SUN : ICON_MOON;
      // Show the icon for the mode the visitor can switch TO.
      btn.setAttribute("data-theme-icon", isDark ? "sun" : "moon");
    }
  }

  function setTheme(theme, persist) {
    applyTheme(theme);
    syncToggles(theme);
    if (persist) storeTheme(theme);
    return theme;
  }

  function init() {
    setTheme(resolveTheme(), false);

    // Wire the toggle button(s).
    var buttons = document.querySelectorAll(".theme-toggle");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme");
        setTheme(current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK, true);
      });
    }

    // Follow OS changes only while the visitor has not chosen explicitly.
    try {
      if (typeof window.matchMedia === "function") {
        var mq = window.matchMedia("(prefers-color-scheme: dark)");
        var onChange = function () {
          if (!readStoredTheme()) {
            setTheme(mq.matches ? THEMES.DARK : THEMES.LIGHT, false);
          }
        };
        if (typeof mq.addEventListener === "function") mq.addEventListener("change", onChange);
        else if (typeof mq.addListener === "function") mq.addListener(onChange);
      }
    } catch (e) {
      /* older browsers simply keep the resolved theme */
    }
  }

  // Expose for other scripts / debugging.
  window.DigimartTheme = {
    get: function () { return document.documentElement.getAttribute("data-theme"); },
    set: function (t) { return setTheme(t === THEMES.DARK ? THEMES.DARK : THEMES.LIGHT, true); },
    toggle: function () {
      return setTheme(document.documentElement.getAttribute("data-theme") === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK, true);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();