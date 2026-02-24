const SITE_DATA = {
  name: "Sethulakshmi Vazhayil",
  role: "PhD Researcher in Astrophysics | Time-domain astrophysics",
  tagline: "Decoding the physics of stellar death and explosion.",
  description:
    "I am a PhD researcher in astronomy at Universidad Diego Portales, specializing in the physics of supernovae and their environments. My work focuses on time-domain surveys and the extraction of physical insight from noisy spectroscopic data. I aim to transform transient events into coherent physical narratives—revealing the mechanisms that govern stellar death, explosion dynamics, and their interaction with the surrounding medium. Each transient-is not merely a detection, but a structured map of underlying astrophysical processes!!.",
  profilePhotoUrl: "profile.jpeg",
  cvUrl: "assets/resume.pdf",
  heroMeta: [
    "Core-collapse supernova",
    "Spectroscopy + photometry",
    "Supernova- Host galaxies",
  ],
  socials: [
    { label: "Email", link: "mailto:sethulakshmi.vazhayil@mail.udp.cl", icon: "email" },
    { label: "GitHub", link: "https://github.com", icon: "github" },
    {
      label: "Google Scholar",
      link: "https://scholar.google.com/citations?hl=en&authuser=1&user=yE2PKPEAAAAJ",
      icon: "scholar",
    },
    { label: "X", link: "https://x.com/Sethulakshmi_GH", icon: "x" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/Sethulakshmi%20V/", icon: "linkedin" },
    { label: "Instagram", link: "https://www.instagram.com/_lakshmisethu/", icon: "instagram" },
  ],
  orbit: {
    rings: [190, 250, 310],
    nodes: [
      { label: "Supernova", angle: "-20deg", radius: "65px" },
      { label: "Host Galaxy", angle: "100deg", radius: "125px" },
      { label: "HCT, Hanle", angle: "230deg", radius: "155px" },
      { label: "Sn 2017hcc", angle: "30deg", radius: "155px" },
      { label: "Sn 2023usc", angle: "150deg", radius: "95px" },
      { label: "VLT-Muse", angle: "-60deg", radius: "125px" },
    ],
  },
  panelOrder: ["works", "publications", "talks", "highlights", "contact"],
  panels: {
    works: {
      title: "Works",
      short: "Active projects and collaborations",
      intro: "Selected work across surveys, methods, and visualization.",
      items: [
        {
          title: "ASASSN Core-Collapse Sample Reanalysis",
          detail: `Studying the local environments of core-collapse supernovae helps reveal the life cycle and properties of their massive star progenitors. Using MUSE on the VLT and unbiased ASAS-SN survey data allows precise, statistically reliable analysis of these supernova environments.`,
          linkLabel: "View summary",
          link: "#",
        },
        {
          title: "A Comparison study on SNtype IIn: CSM Morphology",
          detail: `We present spectroscopic observations of the bright Type-IIn supernovae SN 2017hcc and SN 2023usc using Himalayan Chandra Telescope data. Assuming a multi-epoch mass-loss CSM model, we compare them with other interacting Type-IIn events to propose the morphology and structure of their circumstellar material.`,
          linkLabel: "Draft coming soon",
          link: "#",
        },
        
      ],
    },
    publications: {
      title: "Publications",
      short: "Papers, preprints, and journal work",
      intro: "Selected publications and manuscripts in progress.",
      items: [
        
        {
          title: "Optical and near-infrared nebular-phase spectroscopy of SN 2024ggi: constraints on the structure of the inner ejecta, progenitor mass, and dust",
          detail: "arXiv preprint | 2025",
          linkLabel: "Open preprint",
          link: "10.48550/arXiv.2508.02656 ",
        },
        {
          title: "A comparative study of the type-IIn supernovae, with emphasis on SN2017hcc.",
          detail: "42nd meeting of the Astronomical Society of India (ASI)| 2024",
          linkLabel: "poster presentation",
          link: "https://www.astron-soc.in/asi2024",
        },
      ],
    },
    talks: {
      title: "Talks",
      short: "Invited talks, seminars, and conferences",
      intro: "Recent speaking engagements and upcoming invitations.",
      items: [
        {
          title: "An extended study on ASAS-SN core collapse supernova environments with VLT + MUSE",
          detail: "Japan-South America Supernova Conference,Chile| 2026",
        },
        {
          title: "A Comparison study on SN type IIn: CSM Morphology",
          detail: "Millennium Institute of Astrophysics,Chile| 2025",
        },
        {
          title: "An optical study of interacting supernovae.",
          detail: "Regional Astronomy Meeting -X, India 2025",
        },
        {
          title: "SN2017hcc - a comparative study of type-IIn SNe at similar epochs",
          detail: "Young Scientists Conference on Astronomy and Space Physics, Ukrain| 2024",
        },
        {
          title: "Study of SN 2017hcc using low resolution spectroscopy",
          detail: "National Symposium on Advancements on Various Fields of Physics,India| 2023",
        },
      ],
    },
    highlights: {
      title: "Highlights",
      short: "Awards, milestones, and media features",
      intro: "Key milestones and recognitions.",
      items: [
        {
          title: "Recipient of the ANID National Doctoral Scholarship 2025 ",
          detail: "ANID Scholarship, a competitive Chilean government award supporting PhD research.",
        },
        {
          title: "The National Graduate Physics Examination- STATE TOPPER 2021",
          detail: "conducted by IAPT (Indian Association of Physics Teachers)",
        },
      ],
    },
    contact: {
      title: "Contact",
      short: "How to reach me",
      intro: "Let’s collaborate on the next sky survey story.",
      items: [
        {
          title: "Email",
          detail: "sethulakshmi.vazhayil@mail.udp.cl",
          linkLabel: "Send email",
          link: "mailto:sethulakshmi.vazhayil@mail.udp.cl",
        },
        {
          title: "Lafken Office",
          detail: "Facultad de Ingeniería y Ciencias UDP - Av. Ejército Libertador 441, 8370191 Santiago, Región Metropolitana,Chile",
        },
        {
          title: "Schedule",
          detail: "Available for talks in 2026",
        },
      ],
    },
  },
  results: [
    {
      category: "Scientific",
      items: [
        {
          title: "Visualisation of CSM Morphology",
          detail: "Circumstellar medium (CSM) morphology in Type IIn supernovae",
          image: "sci1.png",
        },
        {
          title: "Host Galaxy Map",
          detail: "Resolved metallicity gradients connected to explosion environments.",
          image: "sci2.png",
        },
      ],
    },
    {
      category: "Outreach",
      items: [
        {
          title: "National Science Day",
          detail: "Volunteered for a public outreach program at the Indian Institute of Astrophysics (IIA) during National Science Day.",
          image: "outreach.jpeg",
        },
        {
          title: "LSST Visit",
          detail: "Explaining how surveys spot cosmic explosions in real time.",
          image: "lsst.jpeg",
        },
      ],
    },
  ],
  backgroundPrefix: "sn",
  backgroundMax: 20,
  backgroundExtensions: ["jpeg", "jpg", "png", "webp"],
  backgroundIntervalMs: 5000,
};

function byId(id) {
  return document.getElementById(id);
}

function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

function buildBackgroundCandidates() {
  const candidates = [];
  for (let i = 1; i <= SITE_DATA.backgroundMax; i += 1) {
    SITE_DATA.backgroundExtensions.forEach((ext) => {
      candidates.push(`${SITE_DATA.backgroundPrefix}${i}.${ext}`);
    });
  }
  return candidates;
}

async function resolveBackgroundImages() {
  const candidates = buildBackgroundCandidates();
  const loaded = await Promise.all(candidates.map((url) => preloadImage(url)));
  return loaded.filter(Boolean);
}

function rotateBackgrounds(images) {
  if (!images.length) return;

  const bgA = byId("bg-a");
  const bgB = byId("bg-b");
  if (!bgA || !bgB) return;

  let index = 0;
  let showingA = true;

  bgA.style.backgroundImage = `url("${images[0]}")`;
  bgA.classList.add("is-active");

  if (images.length === 1) return;

  window.setInterval(() => {
    index = (index + 1) % images.length;
    const nextImage = `url("${images[index]}")`;
    const incoming = showingA ? bgB : bgA;
    const outgoing = showingA ? bgA : bgB;

    incoming.style.backgroundImage = nextImage;
    incoming.classList.add("is-active");
    outgoing.classList.remove("is-active");

    showingA = !showingA;
  }, SITE_DATA.backgroundIntervalMs);
}

function renderHero() {
  const nameEl = byId("profile-name");
  const roleEl = byId("profile-role");
  const taglineEl = byId("profile-tagline");
  const descriptionEl = byId("profile-description");
  const photoEl = byId("profile-photo");
  const metaEl = byId("hero-meta");
  const socialsEl = byId("social-links");
  const cvLink = byId("cv-link");

  if (nameEl) nameEl.textContent = SITE_DATA.name;
  if (roleEl) roleEl.textContent = SITE_DATA.role;
  if (taglineEl) taglineEl.textContent = SITE_DATA.tagline;
  if (descriptionEl) descriptionEl.textContent = SITE_DATA.description;
  if (cvLink) cvLink.href = SITE_DATA.cvUrl;

  if (photoEl) {
    photoEl.src = SITE_DATA.profilePhotoUrl;
    photoEl.alt = `${SITE_DATA.name} profile photo`;
    photoEl.onerror = () => {
      photoEl.src = "profile.jpeg";
    };
  }

  if (metaEl) {
    metaEl.innerHTML = SITE_DATA.heroMeta
      .map((item) => `<span>${item}</span>`)
      .join("");
  }

  if (socialsEl) {
    const icons = {
      email: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 5h18v14H3z" fill="none" stroke="currentColor" stroke-width="1.6" />
          <path d="M3 6l9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.6" />
        </svg>
      `,
      github: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5v-1.72c-2.78.62-3.37-1.23-3.37-1.23-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.59 2.36 1.13 2.94.86.1-.68.35-1.13.63-1.39-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.75 0 0 .85-.28 2.8 1.05.81-.23 1.68-.35 2.54-.35s1.73.12 2.54.35c1.95-1.33 2.8-1.05 2.8-1.05.55 1.43.2 2.49.1 2.75.64.73 1.03 1.66 1.03 2.79 0 3.98-2.34 4.86-4.57 5.12.36.31.68.92.68 1.86v2.76c0 .28.18.61.68.5A10.3 10.3 0 0 0 22 12.2C22 6.58 17.52 2 12 2z"/>
        </svg>
      `,
      scholar: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l9 5-9 5-9-5 9-5z" fill="none" stroke="currentColor" stroke-width="1.6" />
          <path d="M6 12v4.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5V12" fill="none" stroke="currentColor" stroke-width="1.6" />
        </svg>
      `,
      x: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M4 3h4.6l4 5.6L17.9 3H22l-6.8 8.3L22 21h-4.6l-4.3-6.1L8 21H4l7.3-9L4 3z"/>
        </svg>
      `,
      linkedin: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8h4v14h-4V8zm7 0h3.8v1.9h.1c.5-1 1.9-2.1 4-2.1 4.3 0 5.1 2.8 5.1 6.5V22h-4v-6.2c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22h-4V8z"/>
        </svg>
      `,
      instagram: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
        </svg>
      `,
    };

    socialsEl.innerHTML = SITE_DATA.socials
      .map((social) => {
        const icon = icons[social.icon] || "";
        const isMail = social.link.startsWith("mailto:");
        const target = isMail ? "" : ' target="_blank" rel="noreferrer"';
        return `
          <a class="social-link" href="${social.link}"${target}>
            <span class="social-icon">${icon}</span>
            <span>${social.label}</span>
          </a>
        `;
      })
      .join("");
  }
}

function renderOrbit() {
  const orbitEl = byId("orbit");
  if (!orbitEl) return;

  const rings = SITE_DATA.orbit.rings
    .map((size) => `<span class="orbit-ring" style="--size: ${size}px"></span>`)
    .join("");

  const nodes = SITE_DATA.orbit.nodes
    .map(
      (node) =>
        `<span class="orbit-node" style="--angle: ${node.angle}; --radius: ${node.radius};">${node.label}</span>`
    )
    .join("");

  orbitEl.innerHTML = `${rings}${nodes}`;
}

function renderPanels() {
  const panelGrid = byId("panel-grid");
  if (!panelGrid) return;

  panelGrid.innerHTML = SITE_DATA.panelOrder
    .map((key) => {
      const panel = SITE_DATA.panels[key];
      if (!panel) return "";
      return `
        <button class="panel-btn" data-panel="${key}" type="button">
          <span class="panel-btn-title">${panel.title}</span>
        </button>
      `;
    })
    .join("");
}

function renderResults() {
  const grid = byId("results-grid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.results
    .map((group) => {
      const cards = group.items
        .map(
          (item) => `
            <article class="result-card">
              <img src="${item.image}" alt="${item.title}" loading="lazy" />
              <div class="result-body">
                <div class="result-title">${item.title}</div>
                <p class="result-text">${item.detail}</p>
              </div>
            </article>
          `
        )
        .join("");

      return `
        <div class="result-column">
          <h3>${group.category}</h3>
          ${cards}
        </div>
      `;
    })
    .join("");
}

function renderModalContent(panel) {
  const titleEl = byId("modal-title");
  const introEl = byId("modal-intro");
  const contentEl = byId("modal-content");

  if (!titleEl || !introEl || !contentEl) return;

  titleEl.textContent = panel.title;
  introEl.textContent = panel.intro || "";

  const items = panel.items || [];
  if (!items.length) {
    contentEl.innerHTML = `
      <article class="detail-item">
        <h4>Content coming soon</h4>
        <p>Add your details in script.js under this panel.</p>
      </article>
    `;
    return;
  }

  contentEl.innerHTML = items
    .map((item) => {
      const linkHtml =
        item.link && item.linkLabel
          ? `<a class="detail-link" href="${item.link}" target="_blank" rel="noreferrer">${item.linkLabel}</a>`
          : "";
      return `
        <article class="detail-item">
          <h4>${item.title}</h4>
          <p>${item.detail}</p>
          ${linkHtml}
        </article>
      `;
    })
    .join("");
}

function openModal(panelKey) {
  const panel = SITE_DATA.panels[panelKey];
  const modal = byId("panel-modal");
  if (!panel || !modal) return;

  renderModalContent(panel);
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  const modal = byId("panel-modal");
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function wirePanelActions() {
  const panelGrid = byId("panel-grid");
  const closeBtn = byId("modal-close");
  const backdrop = byId("modal-backdrop");

  if (panelGrid) {
    panelGrid.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest("[data-panel]");
      if (!button) return;
      openModal(button.dataset.panel);
    });
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

async function init() {
  renderHero();
  renderOrbit();
  renderPanels();
  renderResults();
  wirePanelActions();

  const images = await resolveBackgroundImages();
  rotateBackgrounds(images);
}

init();
