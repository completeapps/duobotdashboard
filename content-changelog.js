(function () {
  const titleEl = document.getElementById('heroTitle');
  const subtitleEl = document.getElementById('heroSubtitle');
  const gridEl = document.getElementById('mainGrid');

  if (!titleEl || !subtitleEl || !gridEl) return;

  titleEl.textContent = 'Changelog';
  subtitleEl.textContent = 'History of Duo Bot and dashboard updates.';

  gridEl.classList.add('two-column');

  gridEl.innerHTML = `
    <!-- Duo Bot script changelog -->
    <article class="card card-emphasis">
      <h2 class="card-title">Duo Bot – v1.1</h2>
      <p class="hero-subtitle" style="margin-top:0.35rem;">
        October 31, 2025
      </p>
      <ul class="meta-list" style="margin-top:0.75rem;">
        <li><span class="meta-value">Updated bot commands.</span></li>
        <li><span class="meta-value">Added new commands.</span></li>
        <li><span class="meta-value">Started integrating reading of /msg commands.</span></li>
        <li><span class="meta-value">Began adding playtime tracking.</span></li>
        <li><span class="meta-value">Created website.</span></li>
      </ul>
    </article>

    <article class="card">
      <h2 class="card-title">Duo Bot – v1.0</h2>
      <p class="hero-subtitle" style="margin-top:0.35rem;">
        October 30, 2025
      </p>
      <ul class="meta-list" style="margin-top:0.75rem;">
        <li><span class="meta-value">Initial creation of Duo_Bot script and Google Site.</span></li>
        <li><span class="meta-value">Bot can join server and register/login.</span></li>
        <li><span class="meta-value">Responds to basic commands.</span></li>
        <li><span class="meta-value">Tracks registration progress.</span></li>
      </ul>
    </article>

    <!-- Dashboard updates -->
    <article class="card card-emphasis">
      <h2 class="card-title">Dashboard – v0.2</h2>
      <p class="hero-subtitle" style="margin-top:0.35rem;">
        November 4, 2025
      </p>
      <ul class="meta-list" style="margin-top:0.75rem;">
        <li><span class="meta-value">Created logo.</span></li>
        <li><span class="meta-value">Changed Home page.</span></li>
        <li><span class="meta-value">Added Groups page.</span></li>
        <li><span class="meta-value">Added Changelog page.</span></li>
        <li><span class="meta-value">Added Dashboard Updates page.</span></li>
        <li><span class="meta-value">Added Commands page.</span></li>
        <li><span class="meta-value">Added Stats page.</span></li>
      </ul>
    </article>

    <article class="card">
      <h2 class="card-title">Dashboard – v0.1</h2>
      <p class="hero-subtitle" style="margin-top:0.35rem;">
        October 31, 2025
      </p>
      <ul class="meta-list" style="margin-top:0.75rem;">
        <li><span class="meta-value">Created the Duo Bot dashboard website.</span></li>
        <li><span class="meta-value">Initial setup and layout completed.</span></li>
        <li><span class="meta-value">Ready for future update tracking.</span></li>
      </ul>
    </article>

    <!-- Current work box -->
    <article class="card card-emphasis" style="grid-column: 1 / -1;">
      <h2 class="card-title">In Progress</h2>
      <p class="hero-subtitle" style="margin-top:0.35rem;">
        Transferring Website to GitHub and Redesign of the style.
      </p>
    </article>
  `;
})();
