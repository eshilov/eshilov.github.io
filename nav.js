(() => {
  const links = [
    {
      id: "notes",
      href: "/",
      label: "Notes",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5"/><path d="M8 12h8M8 16h8"/></svg>`,
    },
    {
      id: "inbox",
      href: "/inbox/",
      label: "Inbox",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13h4l2 3h4l2-3h4v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6z"/><path d="M4 13l2.5-8h11L20 13"/></svg>`,
    },
    {
      id: "journal",
      href: "/journal/",
      label: "Journal",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h11a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2V6a2 2 0 0 1 2-2z"/><path d="M9 8h6M9 12h6"/></svg>`,
    },
    {
      id: "pomodoro",
      href: "/pomodoro/",
      label: "Pomodoro",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5M9 3h6M12 3v2"/></svg>`,
    },
  ];

  function currentId() {
    const path = location.pathname
      .replace(/\/index\.html$/i, "")
      .replace(/\/+$/, "");
    if (path.endsWith("/inbox")) return "inbox";
    if (path.endsWith("/journal")) return "journal";
    if (path.endsWith("/pomodoro")) return "pomodoro";
    return "notes";
  }

  const style = document.createElement("style");
  style.textContent = `
    .site-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      flex-shrink: 0;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid #2a2a2a;
      background: #121212;
    }

    .site-nav a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.5rem;
      color: #6b6b6b;
      text-decoration: none;
    }

    .site-nav a:hover {
      color: #e8e8e8;
      background: #1a1a1a;
    }

    .site-nav a[aria-current="page"] {
      color: #e8e8e8;
      background: #1a1a1a;
    }

    .site-nav svg {
      width: 1.25rem;
      height: 1.25rem;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.75;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `;
  document.head.append(style);

  const active = currentId();
  const nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.setAttribute("aria-label", "Primary");

  for (const link of links) {
    const a = document.createElement("a");
    a.href = link.href;
    a.title = link.label;
    a.setAttribute("aria-label", link.label);
    if (link.id === active) a.setAttribute("aria-current", "page");
    a.innerHTML = link.icon;
    nav.append(a);
  }

  document.body.prepend(nav);
})();
