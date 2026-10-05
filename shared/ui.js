(function () {
  "use strict";

  const catalog = Array.isArray(window.AURORA_PROJECTS) ? window.AURORA_PROJECTS : [];
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const state = {
    query: "",
    category: "All"
  };

  function normalized(value) {
    return String(value || "").trim().toLowerCase();
  }

  function announce(message) {
    const live = $("#a11y-live");
    if (live) live.textContent = message;
  }

  function showToast(message) {
    const toast = $(".toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }

  function setRipple(event) {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--ripple-x", (event.clientX - rect.left) + "px");
    target.style.setProperty("--ripple-y", (event.clientY - rect.top) + "px");
    target.classList.remove("is-rippling");
    void target.offsetWidth;
    target.classList.add("is-rippling");
  }

  function render() {
    const grid = $(".project-grid");
    const empty = $(".empty-state");
    const cards = $$(".project-card");
    const query = normalized(state.query);

    let visible = 0;
    cards.forEach((card) => {
      const category = card.dataset.category;
      const haystack = normalized(card.dataset.search);
      const matchesCategory = state.category === "All" || category === state.category;
      const matchesQuery = !query || haystack.includes(query);
      const match = matchesCategory && matchesQuery;
      card.hidden = !match;
      if (match) visible += 1;
    });

    if (grid) grid.dataset.visibleCount = String(visible);
    if (empty) empty.classList.toggle("is-visible", visible === 0);

    const total = catalog.length;
    const resultLabel = visible === total ? String(total) : visible + " of " + total;
    const count = $("#result-count");
    if (count) count.textContent = resultLabel + " projects";
    announce("Showing " + resultLabel + " projects.");
  }

  function setCategory(category) {
    state.category = category;
    $$(".segment-button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.category === category));
    });
    render();
  }

  function setupFilters() {
    const search = $("#project-search");
    if (search) {
      search.addEventListener("input", () => {
        state.query = search.value;
        render();
      });
    }

    $$(".segment-button").forEach((button) => {
      button.addEventListener("click", () => setCategory(button.dataset.category));
      button.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          event.preventDefault();
          const index = $$(".segment-button").indexOf(button);
          $$(".segment-button")[(index + 1) % $$(".segment-button").length]?.focus();
        }
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          event.preventDefault();
          const buttons = $$(".segment-button");
          const index = buttons.indexOf(button);
          buttons[(index - 1 + buttons.length) % buttons.length]?.focus();
        }
      });
    });
  }

  function setupRipple() {
    $$(".liquid-ripple").forEach((button) => {
      button.addEventListener("pointerdown", setRipple);
    });
  }

  function setupThemeControl() {
    const button = $("#theme-toggle");
    if (!button) return;

    const validModes = ["system", "light", "dark"];
    const saved = localStorage.getItem("aurora-theme");
    let mode = validModes.includes(saved) ? saved : "system";

    const apply = () => {
      if (mode === "system") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", mode);
      }

      const labels = {
        system: ["◐", "Appearance: system"],
        light: ["☀", "Appearance: light"],
        dark: ["☾", "Appearance: dark"]
      };
      const [icon, label] = labels[mode];
      button.textContent = icon;
      button.setAttribute("aria-label", label);
      button.title = label;
      localStorage.setItem("aurora-theme", mode);
    };

    button.addEventListener("click", () => {
      mode = validModes[(validModes.indexOf(mode) + 1) % validModes.length];
      apply();
    });

    apply();
  }

  function setupJump() {
    $("#view-all")?.addEventListener("click", () => {
      $("#project-search")?.focus({preventScroll: true});
      $(".toolbar")?.scrollIntoView({behavior: "smooth", block: "start"});
    });
  }

  window.AuroraUI = { render, announce, showToast };

  document.addEventListener("DOMContentLoaded", () => {
    setupFilters();
    setupRipple();
    setupThemeControl();
    setupJump();
    render();

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    }
  });
}());
