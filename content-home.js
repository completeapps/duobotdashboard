(function () {
  const titleEl = document.getElementById('heroTitle');
  const subtitleEl = document.getElementById('heroSubtitle');
  const gridEl = document.getElementById('mainGrid');

  if (!titleEl || !subtitleEl || !gridEl) return;

  // You can edit these strings any time without touching HTML
  titleEl.textContent = 'Duo Bot Dashboard';
  subtitleEl.textContent = 'Welcome to the Duo Bot Dashboard!';

  gridEl.classList.remove('two-column'); // single column for now

  gridEl.innerHTML = `
    <article class="card card-emphasis">
      <h2 class="card-title">Bot Overview</h2>
      <ul class="meta-list">
        <li><span class="meta-label">Creator:</span> <span class="meta-value">DouOiledUp</span></li>
        <li><span class="meta-label">Version:</span> <span class="meta-value">v1.1</span></li>
        <li>
          <span class="meta-label">Status:</span>
          <span class="meta-value status-badge status-offline">Not Functioning</span>
        </li>
        <li><span class="meta-label">Active Since:</span> <span class="meta-value">October 30, 2025</span></li>
      </ul>
    </article>
  `;
})();
