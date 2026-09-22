const menuGrid = document.getElementById("menuGrid");
const filters = document.getElementById("menuFilters");
const searchInput = document.getElementById("menuSearch");
const branchesGrid = document.getElementById("branchesGrid");
const mobileToggle = document.getElementById("mobileToggle");
const nav = document.getElementById("siteNav");
const header = document.querySelector(".site-header");
const backTop = document.getElementById("backTop");

const formatter = (value) => `${Number(value).toFixed(2)} JD`;

function priceHTML(item) {
  if (item.price) {
    return `<span class="single-price">${formatter(item.price)}</span>`;
  }

  const parts = [];
  if (item.sandwich) {
    parts.push(`<span><small>ساندويش</small><b>${formatter(item.sandwich)}</b></span>`);
  }
  if (item.meal) {
    parts.push(`<span><small>وجبة</small><b>${formatter(item.meal)}</b></span>`);
  }
  return `<div class="dual-price">${parts.join("")}</div>`;
}

function renderMenu(category = "all", query = "") {
  const q = query.trim().toLowerCase();
  const visible = MENU_DATA.filter(cat => {
    if (category !== "all" && cat.id !== category) return false;
    if (!q) return true;
    return (
      cat.title.toLowerCase().includes(q) ||
      cat.subtitle.toLowerCase().includes(q) ||
      cat.items.some(item => `${item.name} ${item.detail || ""}`.toLowerCase().includes(q))
    );
  });

  if (!visible.length) {
    menuGrid.innerHTML = `
      <div class="empty-state">
        <span>⌕</span>
        <h3>ما لقينا الصنف</h3>
        <p>جرّب اسم ثاني أو اختار قسم من فوق.</p>
      </div>`;
    return;
  }

  menuGrid.innerHTML = visible.map((cat, index) => {
    const items = q
      ? cat.items.filter(item => `${cat.title} ${cat.subtitle} ${item.name} ${item.detail || ""}`.toLowerCase().includes(q))
      : cat.items;

    const shownItems = items.length ? items : cat.items;

    return `
      <article class="menu-card compact-menu-card reveal" style="--delay:${index * 45}ms">
        <div class="menu-card-head">
          <div class="menu-thumb">
            <img src="${cat.image}" alt="${cat.title}" loading="lazy">
          </div>
          <div class="menu-card-title compact-title">
            <span>${cat.subtitle}</span>
            <h3>${cat.title}</h3>
          </div>
        </div>
        <div class="menu-list">
          ${cat.note ? `<p class="menu-note">${cat.note}</p>` : ""}
          ${shownItems.map(item => `
            <div class="menu-row">
              <div class="item-copy">
                <strong>${item.name}</strong>
                ${item.detail ? `<small>${item.detail}</small>` : ""}
              </div>
              ${priceHTML(item)}
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");

  observeReveals();
}

function buildFilters() {
  const buttons = [
    { id: "all", title: "الكل" },
    ...MENU_DATA.map(c => ({ id: c.id, title: c.title }))
  ];

  filters.innerHTML = buttons.map((button, i) => `
    <button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${button.id}">
      ${button.title}
    </button>
  `).join("");

  filters.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filters.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderMenu(btn.dataset.filter, searchInput.value);
    });
  });
}

function renderBranches() {
  branchesGrid.innerHTML = BRANCHES.map((branch, index) => `
    <article class="branch-card reveal" style="--delay:${index * 60}ms">
      <span class="pin-icon" aria-hidden="true">⌖</span>
      <div>
        <h3>${branch.name}</h3>
        <p>${branch.area}</p>${branch.phone ? `<small class="branch-phone">${branch.phone}</small>` : ""}
      </div>
      <a href="${branch.maps}" target="_blank" rel="noopener" aria-label="فتح ${branch.name} على خرائط جوجل">
        الاتجاهات
        <span>↗</span>
      </a>
    </article>
  `).join("");
  observeReveals();
}

searchInput.addEventListener("input", () => {
  const active = filters.querySelector(".filter-btn.active");
  renderMenu(active?.dataset.filter || "all", searchInput.value);
});

mobileToggle.addEventListener("click", () => {
  const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
  mobileToggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open");
  document.body.classList.toggle("nav-open");
});

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  document.body.classList.remove("nav-open");
  mobileToggle.setAttribute("aria-expanded", "false");
}));

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
  backTop.classList.toggle("show", window.scrollY > 700);
});

backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

function observeReveals() {
  const nodes = document.querySelectorAll(".reveal:not(.is-visible)");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  nodes.forEach(node => observer.observe(node));
}

buildFilters();
renderMenu();
renderBranches();
observeReveals();

document.getElementById("year").textContent = new Date().getFullYear();