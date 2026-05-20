(function () {
  const titleEl = document.getElementById('heroTitle');
  const subtitleEl = document.getElementById('heroSubtitle');
  const gridEl = document.getElementById('mainGrid');

  if (!titleEl || !subtitleEl || !gridEl) return;

  titleEl.textContent = 'TSC';
  subtitleEl.textContent = 'Details for the TSC group.';

  gridEl.classList.add('two-column');

  gridEl.innerHTML = `
    <article class="card card-emphasis">
      <h2 class="card-title">Members</h2>
      <p class="hero-subtitle" style="margin-top:0.35rem;">
        Add member details here when you are ready.
      </p>
    </article>

    <article class="card card-emphasis">
      <h2 class="card-title">Creation Date</h2>
      <p class="hero-subtitle" style="margin-top:0.35rem;">
        Specify when TSC was created and any relevant notes.
      </p>
    </article>
  `;
})();
