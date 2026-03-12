document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("tweet-list");
  const buttons = document.querySelectorAll(".filter-btn");

  function render(filter) {
    const filtered =
      filter === "all" ? TWEETS : TWEETS.filter((t) => t.category === filter);

    // いいね数降順 → 日付降順
    filtered.sort((a, b) => b.likes - a.likes || b.date.localeCompare(a.date));

    list.innerHTML = filtered
      .map(
        (t) => `
      <div class="tweet-card" data-category="${t.category}">
        <div class="tweet-meta">
          <span class="tweet-date">${t.date}</span>
          <span class="tweet-likes">${t.likes} likes</span>
        </div>
        <div class="tweet-text">${escapeHtml(t.text)}</div>
        ${t.images && t.images.length ? `<div class="tweet-images">${t.images.map(url => `<img src="${url}" alt="" loading="lazy">`).join("")}</div>` : ""}
        <div class="tweet-category">
          <span class="tag">${categoryLabel(t.category)}</span>
        </div>
      </div>`
      )
      .join("");
  }

  function categoryLabel(cat) {
    const labels = {
      practice: "実践",
      mindset: "マインド",
      tech: "テック",
      beauty: "美容",
    };
    return labels[cat] || cat;
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.filter);
    });
  });

  render("all");
});
