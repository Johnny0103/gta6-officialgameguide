(() => {
  const savedGuidesKey = "gta6-saved-guides";

  function readSavedGuides() {
    try {
      return JSON.parse(localStorage.getItem(savedGuidesKey) || "[]");
    } catch {
      return [];
    }
  }

  function writeSavedGuides(guides) {
    localStorage.setItem(savedGuidesKey, JSON.stringify(guides));
  }

  function saveGuide(title, url) {
    const guides = readSavedGuides();
    const normalizedUrl = url || window.location.pathname.split("/").pop() || "index.html";
    const exists = guides.some((guide) => guide.url === normalizedUrl);
    if (!exists) {
      guides.unshift({ title, url: normalizedUrl, savedAt: new Date().toISOString() });
      writeSavedGuides(guides.slice(0, 12));
    }
  }

  document.querySelectorAll("[data-save-guide]").forEach((button) => {
    const title = button.dataset.guideTitle || document.querySelector("h1")?.textContent || document.title;
    const url = button.dataset.guideUrl || window.location.pathname.split("/").pop() || "index.html";
    const status = button.parentElement?.querySelector("[data-save-status]");

    button.addEventListener("click", () => {
      saveGuide(title, url);
      button.textContent = "Guide Saved";
      button.classList.add("is-saved");
      if (status) {
        status.textContent = "Saved to MyGTA Dashboard in this browser.";
        status.hidden = false;
      }
    });
  });
})();
