(function () {
  const titleEl = document.getElementById('heroTitle');
  const subtitleEl = document.getElementById('heroSubtitle');
  const botList = document.getElementById('botList');
  const dashList = document.getElementById('dashList');

  if (!titleEl || !subtitleEl || !botList || !dashList) return;

  titleEl.textContent = 'Changelog';
  subtitleEl.textContent = 'History of Duo Bot and dashboard updates.';

  // Data: edit here when you add new versions
  const botEntries = [
    {
      version: 'Duo Bot – v1.1',
      date: 'October 31, 2025',
      points: [
        'Updated bot commands.',
        'Added new commands.',
        'Started integrating reading of /msg commands.',
        'Began adding playtime tracking.',
        'Created website.'
      ],
      emphasis: true
    },
    {
      version: 'Duo Bot – v1.0',
      date: 'October 30, 2025',
      points: [
        'Initial creation of Duo_Bot script and Google Site.',
        'Bot can join server and register/login.',
        'Responds to basic commands.',
        'Tracks registration progress.'
      ],
      emphasis: false
    }
  ];

  const dashEntries = [
    {
      version: 'Dashboard – v0.2',
      date: 'November 4, 2025',
      points: [
        'Created logo.',
        'Changed Home page.',
        'Added Groups page.',
        'Added Changelog page.',
        'Added Dashboard Updates page.',
        'Added Commands page.',
        'Added Stats page.'
      ],
      emphasis: true
    },
    {
      version: 'Dashboard – v0.1',
      date: 'October 31, 2025',
      points: [
        'Created the Duo Bot dashboard website.',
        'Initial setup and layout completed.',
        'Ready for future update tracking.'
      ],
      emphasis: false
    }
  ];

  function renderEntry(entry) {
    const emphasisClass = entry.emphasis ? ' card-emphasis' : '';
    const pointsHtml = entry.points
      .map(p => `<li><span class="meta-value">${p}</span></li>`)
      .join('');

    return `
      <article class="card${emphasisClass}">
        <h2 class="card-title">${entry.version}</h2>
        <p class="hero-subtitle" style="margin-top:0.35rem;">
          ${entry.date}
        </p>
        <ul class="meta-list" style="margin-top:0.75rem;">
          ${pointsHtml}
        </ul>
      </article>
    `;
  }

  let botOrderNewestFirst = true;
  let dashOrderNewestFirst = true;

  function renderBotColumn() {
    const entries = botOrderNewestFirst
      ? [...botEntries]
      : [...botEntries].reverse();

    botList.innerHTML = entries.map(renderEntry).join('');
  }

  function renderDashColumn() {
    const entries = dashOrderNewestFirst
      ? [...dashEntries]
      : [...dashEntries].reverse();

    dashList.innerHTML =
      entries.map(renderEntry).join('') +
      `
      <article class="card card-emphasis">
        <h2 class="card-title">In Progress</h2>
        <p class="hero-subtitle" style="margin-top:0.35rem;">
          Transferring Website to GitHub and Redesign of the style.
        </p>
      </article>
    `;
  }

  // Initial render
  renderBotColumn();
  renderDashColumn();

  // Wire up order toggle buttons
  const orderButtons = document.querySelectorAll('.order-toggle');

  orderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target === 'bot') {
        botOrderNewestFirst = !botOrderNewestFirst;
        btn.textContent = botOrderNewestFirst
          ? 'Order: Newest → Oldest'
          : 'Order: Oldest → Newest';
        renderBotColumn();
      } else if (target === 'dash') {
        dashOrderNewestFirst = !dashOrderNewestFirst;
        btn.textContent = dashOrderNewestFirst
          ? 'Order: Newest → Oldest'
          : 'Order: Oldest → Newest';
        renderDashColumn();
      }
    });
  });
})();
