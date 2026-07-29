// --- PRODUCTION PROJECTS DATA ---
const PROJECTS = [
  {
    id: 1,
    title: 'XRM Web Application',
    category: 'Enterprise SaaS / VMS',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    link: 'https://nvxrm-testing.acrocorp.com/qa_ui/auth/login',
    summary: 'A comprehensive Extended Resource Management (XRM) platform streamlining vendor workflows, contractor onboarding, timesheet approvals, and compliance.',
    role: 'UI/UX Designer',
    impact: 'Redesigned authentication & core dashboard layouts for multi-tenant enterprise clients.',
    tags: ['SaaS', 'Web App', 'Role-Based Dashboards', 'Figma']
  },
  {
    id: 2,
    title: 'XRM Mobile Application',
    category: 'iOS & Android App',
    bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    link: 'https://nvxrm-testing.acrocorp.com/qa_ui/auth/login',
    summary: 'Mobile companion app for managers and field contractors to submit timecards, review pending requisitions, and receive real-time status alerts.',
    role: 'Lead Mobile UI/UX',
    impact: 'Improved mobile approval velocity by enabling 1-tap manager sign-offs.',
    tags: ['Mobile UX', 'iOS/Android', 'Micro-interactions', 'Design System']
  },
  {
    id: 3,
    title: 'Direct Sourcing Platform',
    category: 'Talent Acquisition SaaS',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    link: 'https://xrmqa.acrocorp.com/ds_ui/auth/login',
    summary: 'An intelligent talent curation portal enabling enterprises to directly source, screen, and engage contingent talent pools without third-party markup.',
    role: 'Product Designer',
    impact: 'Created seamless candidate search filters and job requisition wizard.',
    tags: ['Direct Sourcing', 'Candidate Experience', 'Design Tokens', 'Figma']
  }
];

// --- PLAYGROUND CONTENT DATA (Havana Nguyen Style "But wait, there's more!") ---
const PLAYGROUND = {
  procreate: [
    {
      title: 'Neon Cyberpunk Portrait',
      type: 'Procreate Digital Painting',
      desc: 'Exploration of dramatic lighting, brush textures, and color theory created on iPad Pro.',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Botanical & Environment Study',
      type: 'Digital Illustration',
      desc: 'Organic shapes and subtle gradients—helping me refine lighting and depth for digital UI components.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Character Conceptualization',
      type: 'Visual Art / Sketching',
      desc: 'Focusing on expression, silhouette readability, and visual narrative.',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80'
    }
  ],
  figma: [
    {
      title: 'Smart Home IoT Controller UI',
      type: 'Self-Practice Prototype',
      desc: 'Interactive Figma prototype testing glassmorphism, fluid dark mode transitions, and slider components.',
      link: 'https://www.figma.com/proto/5tabpNcYkAqSAu1u39TcfG/Work-Designs?node-id=96-131&t=dGxn17lRXiWkcu1v-0&scaling=scale-down&content-scaling=fixed&page-id=74%253A38&starting-point-node-id=96%253A131&show-proto-s'
    },
    {
      title: 'Fintech Micro-interaction Study',
      type: 'Figma Animation',
      desc: 'Explorations in Figma Smart Animate: smooth card expansion, haptic feedback visualizers, and state shifts.',
      link: 'https://www.figma.com/proto/fTwyuWIa9ym1nAydXXvatf/Project?node-id=2012-2071&t=JTX9yESKe2TlGHYB-0&scaling=scale-down&content-scaling=fixed&page-id=2009%3A2&starting-point-node-id=2012%3A2071&show-proto-sidebar=1'
    },
    {
      title: 'Minimalist E-Commerce Design System',
      type: 'UI Component Library',
      desc: 'Built a 40+ component Figma UI kit with auto-layout v5, variant properties, and strict accessibility ratios.',
      link: 'https://www.figma.com/proto/fTwyuWIa9ym1nAydXXvatf/Project?node-id=2098-1620&t=JTX9yESKe2TlGHYB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1'    
    }
  ],
  speaking: [
    {
      title: 'Design Critique & Critique Culture',
      event: 'Internal Design Sync',
      desc: 'Led a workshop on framing constructive feedback during early wireframe reviews without triggering defensiveness.'
    },
    {
      title: 'Communicating UI Decisions to Engineers',
      event: 'Product & Tech Handoff Session',
      desc: 'Presented strategies for documenting component tokens and redlines in Figma to eliminate handoff friction.'
    },
    {
      title: 'Storytelling in Product Presentations',
      event: 'Public Speaking Practice',
      desc: 'Passionate about public speaking—framing user problems into compelling stories for executive stakeholders.'
    }
  ]
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  renderProjects();
  renderPlayground('procreate');

  setupThemeToggle();
  setupProgressIndicator();
  setupTabs();
  setupMobileMenu();
  setupModal();
  setupBackToTop();
});

// --- THEME TOGGLE ---
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.body.removeAttribute('data-theme');
      icon.setAttribute('data-lucide', 'moon');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      icon.setAttribute('data-lucide', 'sun');
    }
    lucide.createIcons();
  });
}

// --- SCROLL PROGRESS INDICATOR ---
function setupProgressIndicator() {
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const scrolled = (currentScroll / totalScroll) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}

// --- RENDER PROJECTS ---
function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = PROJECTS.map(p => `
    <div class="project-card">
      <div class="project-banner" style="background-image: url('${p.bgImage}');">
        <span class="project-badge">${p.category}</span>
        <h3 class="project-banner-title">${p.title}</h3>
      </div>
      <div class="project-body">
        <p class="project-desc">${p.summary}</p>
        <a href="${p.link}" target="_blank" class="project-link-btn">
          Live Application Portal <i data-lucide="external-link"></i>
        </a>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <button class="btn btn-outline" onclick="openModal(${p.id})">
          Read Case Breakdown <i data-lucide="arrow-right"></i>
        </button>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// --- TABS & PLAYGROUND RENDER ---
function setupTabs() {
  const btns = document.querySelectorAll('.tab-btn');
  console.log(btns);
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      btns.forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      renderPlayground(target.dataset.tab);
    });
  });
}

function renderPlayground(tab) {
  const container = document.getElementById('playground-content');
  
  if (tab === 'procreate') {
    container.innerHTML = `
      <div class="playground-grid">
        ${PLAYGROUND.procreate.map(item => `
          <div class="art-card">
            <div class="art-img-box">
              <img src="${item.image}" alt="${item.title}" />
            </div>
            <div>
              <span class="section-tag">${item.type}</span>
              <h4>${item.title}</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tab === 'figma') {
    container.innerHTML = `
      <div class="playground-grid">
        ${PLAYGROUND.figma.map(item => `
          <div class="figma-card">
            <div style="display:flex; align-items:center; gap:0.5rem; color:var(--primary); font-weight:700;">
              <i data-lucide="figma"></i> ${item.type}
            </div>
            <h4>${item.title}</h4>
            <p style="font-size:0.85rem; color:var(--text-muted);">${item.desc}</p>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top:auto; text-decoration:none; display:inline-flex; align-items:center; gap:0.5rem;">
              Launch Figma Preview <i data-lucide="play"></i>
            </a>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tab === 'speaking') {
    container.innerHTML = `
      <div class="playground-grid">
        ${PLAYGROUND.speaking.map(item => `
          <div class="speaking-card">
            <div class="speaking-icon-box">
              <i data-lucide="mic"></i>
            </div>
            <span class="section-tag">${item.event}</span>
            <h4>${item.title}</h4>
            <p style="font-size:0.85rem; color:var(--text-muted);">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    `;
  }
  lucide.createIcons();
}

// --- MODAL SETUP ---
function setupModal() {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('modal-close');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
}

function openModal(id) {
  const p = PROJECTS.find(item => item.id === id);
  if (!p) return;

  document.getElementById('modal-tag').innerText = p.category;
  document.getElementById('modal-title').innerText = p.title;
  
  document.getElementById('modal-meta').innerHTML = `
    <div><span style="color:var(--text-muted);">Role:</span> <strong>${p.role}</strong></div>
    <div><span style="color:var(--text-muted);">Live URL:</span> <a href="${p.link}" target="_blank" style="color:var(--primary);">${p.link}</a></div>
  `;

  document.getElementById('modal-body').innerHTML = `
    <h4>Overview & Problem Space</h4>
    <p>${p.summary}</p>
    <h4>Design Contribution & Business Impact</h4>
    <p>${p.impact}</p>
  `;

  document.getElementById('modal').style.display = 'flex';
  lucide.createIcons();
}

// --- MOBILE MENU ---
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-link');

  btn.addEventListener('click', () => {
    const isVisible = menu.style.display === 'flex';
    menu.style.display = isVisible ? 'none' : 'flex';
  });

  links.forEach(l => {
    l.addEventListener('click', () => menu.style.display = 'none');
  });
}

// --- BACK TO TOP ---
function setupBackToTop() {
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const btn = event.target.querySelector('button[type="submit"]');
  btn.innerText = 'Sending...';

  // Send form using EmailJS
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      alert('Message sent successfully!');
      btn.innerText = 'Send Message';
      document.getElementById('contact-form').reset();
    }, function(error) {
      alert('Failed to send message: ' + JSON.stringify(error));
      btn.innerText = 'Send Message';
    });
});