(function () {
  const titleEl = document.getElementById('heroTitle');
  const subtitleEl = document.getElementById('heroSubtitle');
  const tableBody = document.getElementById('commandsTableBody');
  const filterButtons = document.querySelectorAll('.command-filter');
  const adminStatus = document.getElementById('adminStatus');
  const adminUnlockBtn = document.getElementById('adminUnlockBtn');

  if (!titleEl || !subtitleEl || !tableBody || !adminStatus || !adminUnlockBtn) return;

  titleEl.textContent = 'Commands';
  subtitleEl.textContent = 'Documented commands for Duo Bot. Some commands are still being developed.';

  const ADMIN_PASSWORD = '0000';

  // Command data
  const commands = [
    // Your existing commands (available)
    { name: '!dox', category: 'info', status: 'available', adminOnly: false,
      desc: 'Returns collected information on the current player (concept/debug use only).' },
    { name: '!health', category: 'info', status: 'available', adminOnly: false,
      desc: 'Shows the current health of Duo Bot.' },
    { name: '!inventory', category: 'info', status: 'available', adminOnly: false,
      desc: 'Lists the items Duo Bot is carrying.' },
    { name: '!nearby', category: 'info', status: 'available', adminOnly: false,
      desc: 'Lists nearby players and entities around the bot.' },
    { name: '!lookat <player>', category: 'info', status: 'available', adminOnly: false,
      desc: 'Turns Duo Bot to look at the specified player.' },
    { name: '!joke', category: 'fun', status: 'available', adminOnly: false,
      desc: 'Sends a random joke into chat.' },
    { name: '!meme', category: 'fun', status: 'available', adminOnly: false,
      desc: 'Sends a random meme-style message.' },
    { name: '!magic8', category: 'fun', status: 'available', adminOnly: false,
      desc: 'Ask a question and get a Magic 8-Ball style answer.' },
    { name: '!kidnap <player>', category: 'fun', status: 'available', adminOnly: false,
      desc: 'Teleports the target player to a nearby location (concept/roleplay only).' },
    { name: '!stop', category: 'movement', status: 'available', adminOnly: false,
      desc: 'Stops the current movement or task.' },
    { name: '!path <x> <y> <z>', category: 'movement', status: 'available', adminOnly: false,
      desc: 'Pathfinds to the given coordinates.' },

    // Extra info/utility commands (planned)
    { name: '!time', category: 'info', status: 'planned', adminOnly: false,
      desc: 'Shows the current in-game time (planned, not implemented yet).' },
    { name: '!whereami', category: 'info', status: 'planned', adminOnly: false,
      desc: 'Displays the bot’s current coordinates (planned).' },
    { name: '!serverinfo', category: 'info', status: 'planned', adminOnly: false,
      desc: 'Basic info about the connected server (planned).' },
    { name: '!ping', category: 'info', status: 'planned', adminOnly: false,
      desc: 'Shows latency between Duo Bot and the server (planned).' },
    { name: '!coords', category: 'info', status: 'planned', adminOnly: false,
      desc: 'Shortcut to print current coordinates (planned).' },
    { name: '!locate <player>', category: 'info', status: 'planned', adminOnly: false,
      desc: 'Attempts to locate a player’s last known position (planned).' },
    { name: '!track <player>', category: 'info', status: 'planned', adminOnly: false,
      desc: 'Tracks a player’s movement for a short time (planned).' },
    { name: '!seen <player>', category: 'info', status: 'planned', adminOnly: false,
      desc: 'Shows when Duo Bot last saw the player (planned).' },
    { name: '!afk', category: 'info', status: 'planned', adminOnly: false,
      desc: 'Marks Duo Bot as AFK and sends an auto-response (planned).' },
    { name: '!return', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Returns to the last saved safe position (planned).' },

    // Extra fun/social commands (planned)
    { name: '!roast <player>', category: 'fun', status: 'planned', adminOnly: false,
      desc: 'Drops a random roast on the targeted player (planned).' },
    { name: '!compliment <player>', category: 'fun', status: 'planned', adminOnly: false,
      desc: 'Sends a wholesome compliment (planned).' },
    { name: '!coinflip', category: 'fun', status: 'planned', adminOnly: false,
      desc: 'Coin flip: heads or tails (planned).' },
    { name: '!roll', category: 'fun', status: 'planned', adminOnly: false,
      desc: 'Rolls a random number (planned).' },
    { name: '!quote', category: 'fun', status: 'planned', adminOnly: false,
      desc: 'Sends a random quote (planned).' },
    { name: '!fact', category: 'fun', status: 'planned', adminOnly: false,
      desc: 'Sends a random fact (planned).' },
    { name: '!gif', category: 'fun', status: 'planned', adminOnly: false,
      desc: 'Suggests a GIF-style reaction text (planned).' },
    { name: '!dance', category: 'fun', status: 'planned', adminOnly: false,
      desc: 'Makes Duo Bot move in a dance pattern (planned).' },
    { name: '!pose', category: 'fun', status: 'planned', adminOnly: false,
      desc: 'Positions Duo Bot in a “screenshot pose” (planned).' },
    { name: '!song', category: 'fun', status: 'planned', adminOnly: false,
      desc: 'Prints lyrics or song lines (planned).' },

    // Extra movement commands (planned)
    { name: '!follow <player>', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Follows a player around the world (planned).' },
    { name: '!guard <player>', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Stays near and protects a player (planned).' },
    { name: '!circle <player>', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Circles around the player at a small radius (planned).' },
    { name: '!goto <player>', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Pathfinds to the player’s location (planned).' },
    { name: '!patrol', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Walks a predefined patrol route (planned).' },
    { name: '!mine', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Mines a region or vein (planned).' },
    { name: '!farm', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Harvests and replants crops in an area (planned).' },
    { name: '!bridge', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Builds a simple bridge in front of the bot (planned).' },
    { name: '!tower', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Builds a quick tower upward (planned).' },
    { name: '!descend', category: 'movement', status: 'planned', adminOnly: false,
      desc: 'Safely moves downward (planned).' },

    // Admin commands (only visible when unlocked)
    { name: '!shutdown', category: 'admin', status: 'planned', adminOnly: true,
      desc: 'Safely disconnects Duo Bot from the server (admin only, planned).' },
    { name: '!restart', category: 'admin', status: 'planned', adminOnly: true,
      desc: 'Restarts the bot process (admin only, planned).' },
    { name: '!reload', category: 'admin', status: 'planned', adminOnly: true,
      desc: 'Reloads configuration and scripts (admin only, planned).' },
    { name: '!saveconfig', category: 'admin', status: 'planned', adminOnly: true,
      desc: 'Saves current settings to config (admin only, planned).' },
    { name: '!sethome', category: 'admin', status: 'planned', adminOnly: true,
      desc: 'Sets the current position as home (admin only, planned).' },
    { name: '!delhome', category: 'admin', status: 'planned', adminOnly: true,
      desc: 'Removes the saved home position (admin only, planned).' },
    { name: '!tp <player>', category: 'admin', status: 'planned', adminOnly: true,
      desc: 'Teleports a player to Duo Bot or a set location (admin only, planned).' },
    { name: '!mute <player>', category: 'admin', status: 'planned', adminOnly: true,
      desc: 'Marks a player as muted for Duobot responses (admin only, planned).' },
    { name: '!ban <player>', category: 'admin', status: 'planned', adminOnly: true,
      desc: 'Adds a player to an internal ban list (admin only, planned).' },
    { name: '!kick <player>', category: 'admin', status: 'planned', adminOnly: true,
      desc: 'Requests a kick for the target player (admin only, planned).' }
  ];

  let currentFilter = 'all';
  let adminUnlocked = false;

  // Load admin state from localStorage
  try {
    adminUnlocked = localStorage.getItem('duobotAdmin') === 'true';
  } catch (e) {
    adminUnlocked = false;
  }

  function updateAdminStatus() {
    if (adminUnlocked) {
      adminStatus.textContent = 'Admin view: Unlocked';
      adminStatus.classList.add('admin-on');
    } else {
      adminStatus.textContent = 'Admin view: Locked';
      adminStatus.classList.remove('admin-on');
    }
  }

  function renderCommands() {
    const rows = commands
      .filter(cmd => {
        if (!adminUnlocked && cmd.adminOnly) return false;
        if (currentFilter === 'all') return true;
        return cmd.category === currentFilter;
      })
      .map(cmd => {
        const statusClass =
          cmd.status === 'available'
            ? 'command-status-available'
            : cmd.category === 'admin'
            ? 'command-status-admin'
            : 'command-status-planned';

        const statusLabel =
          cmd.status === 'available'
            ? 'Available'
            : cmd.category === 'admin'
            ? 'Admin / Planned'
            : 'Planned';

        return `
          <div class="command-row">
            <div class="command-name">${cmd.name}</div>
            <div class="command-desc">${cmd.desc}</div>
            <div class="command-category">${formatCategory(cmd.category)}</div>
            <div><span class="command-status-badge ${statusClass}">${statusLabel}</span></div>
          </div>
        `;
      })
      .join('');

    tableBody.innerHTML = rows;
  }

  function formatCategory(cat) {
    switch (cat) {
      case 'info': return 'Info / Utility';
      case 'fun': return 'Fun / Social';
      case 'movement': return 'Movement';
      case 'admin': return 'Admin';
      default: return cat;
    }
  }

  // Filters
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      renderCommands();
    });
  });

  // Admin unlock
  adminUnlockBtn.addEventListener('click', () => {
    const input = prompt('Enter admin password:');
    if (input === null) return;
    if (input.trim() === ADMIN_PASSWORD) {
      adminUnlocked = true;
      try {
        localStorage.setItem('duobotAdmin', 'true');
      } catch (e) {}
      updateAdminStatus();
      renderCommands();
    } else {
      alert('Incorrect password.');
    }
  });

  updateAdminStatus();
  renderCommands();
})();
