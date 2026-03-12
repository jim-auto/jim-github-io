document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("tweet-list");

  // 日付降順でソート
  TWEETS.sort((a, b) => b.date.localeCompare(a.date));

  list.innerHTML = TWEETS.map(
    (t) => `
      <div class="tweet-card">
        <div class="tweet-meta">
          <span class="tweet-date">${t.date}</span>
          <span class="tweet-likes">${t.likes} likes</span>
        </div>
        <div class="tweet-text">${escapeHtml(t.text)}</div>
        ${t.images && t.images.length ? `<div class="tweet-images">${t.images.map(url => `<img src="${url}" alt="" loading="lazy">`).join("")}</div>` : ""}
      </div>`
  ).join("");

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
});
