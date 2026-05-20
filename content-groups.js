(function () {
  const titleEl = document.getElementById('heroTitle');
  const subtitleEl = document.getElementById('heroSubtitle');
  const gridEl = document.getElementById('mainGrid');

  if (!titleEl || !subtitleEl || !gridEl) return;

  titleEl.textContent = 'Groups';
  subtitleEl.textContent = 'Overview of bot-related groups.';

  gridEl.classList.add('two-column');

  gridEl.innerHTML = `
    <a href="tsc.html" class="card card-emphasis" style="text-decoration:none; color:inherit;">
      <h2 class="card-title">TSC</h2>
      <p class="hero-subtitle" style="margin-top:0.35rem;">
        Primary group associated with Duo Bot.
      </p>
    </a>

    <article class="card">
      <h2 class="card-title">Reserved Slot</h2>
      <p class="hero-subtitle" style="margin-top:0.35rem;">
        Space for another group when you are ready.
      </p>
    </article>
  `;
})();
