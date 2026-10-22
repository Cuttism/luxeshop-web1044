// =========================================================================
// Render Products — with discount badge & quick-view click
// =========================================================================
function renderProducts(elementId, productList) {
  const container = document.getElementById(elementId);
  if (!container) return;

  if (productList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent); opacity: 0.8;"></i>
        <h3 style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 0.5rem;">Không tìm thấy sản phẩm phù hợp</h3>
        <p style="font-size: 0.95rem;">Vui lòng thử tìm kiếm với từ khóa khác hoặc điều chỉnh lại bộ lọc danh mục/giá.</p>
      </div>`;
    return;
  }

  container.innerHTML = productList
    .map((p) => {
      // Calculate discount percentage if oldPrice exists
      let badgeHtml = "";
      if (p.oldPrice) {
        const discount = Math.round((1 - p.price / p.oldPrice) * 100);
        badgeHtml = `<span class="product-badge badge-sale">-${discount}%</span>`;
      } else if (p.category === "Mới") {
        badgeHtml = '<span class="product-badge badge-new">New</span>';
      } else if (p.category === "Hot") {
        badgeHtml = '<span class="product-badge badge-hot">Hot</span>';
      }

      return `
        <div class="product-card" onclick="openQuickView(${p.id})">
            ${badgeHtml}
            <div class="product-img-wrapper">
                <img class="img-main" src="${p.image}" alt="${p.name}">
                ${p.imageHover ? `<img class="img-hover" src="${p.imageHover}" alt="${p.name}">` : ""}
            </div>
            <div class="product-info">
                ${p.brand ? `<span class="product-brand">${p.brand}</span>` : ""}
                <h3 class="product-title" title="${p.name}"><a href="product-detail.html?id=${p.id}" style="color:inherit;text-decoration:none;" onclick="event.stopPropagation()">${p.name}</a></h3>
                <div class="price-container">
                    <span class="product-price">${formatPrice(p.price)}</span>
                    ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ""}
                </div>
            </div>
        </div>
    `;
    })
    .join("");
}

// =========================================================================
// Quick View Modal
// =========================================================================
function createQuickViewModal() {
  if (document.getElementById("quickview-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "quickview-overlay";
  overlay.className = "quickview-overlay";
  overlay.onclick = function (e) {
    if (e.target === overlay) closeQuickView();
  };
  overlay.innerHTML = `
    <div class="quickview-modal" id="quickview-modal">
      <button class="quickview-close" onclick="closeQuickView()" title="Đóng (Esc)"><i class="fa-solid fa-xmark"></i></button>
      <div class="quickview-image" id="qv-image-container">
        <img id="qv-image" src="" alt="">
      </div>
      <div class="quickview-details" id="qv-details">
        <!-- Populated by JS -->
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function openQuickView(productId) {
  createQuickViewModal();

  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById("quickview-overlay");
  const imgEl = document.getElementById("qv-image");
  const detailsEl = document.getElementById("qv-details");

  imgEl.src = product.image;
  imgEl.alt = product.name;

  // Build size options
  let sizeHtml = "";
  if (product.productType === "clothing") {
    sizeHtml = `
      <div class="quickview-options">
        <h4>Kích Cỡ</h4>
        <div class="quickview-sizes">
          <button class="qv-size-btn" data-size="S">S</button>
          <button class="qv-size-btn" data-size="M">M</button>
          <button class="qv-size-btn" data-size="L">L</button>
          <button class="qv-size-btn" data-size="XL">XL</button>
        </div>
      </div>`;
  } else if (product.productType === "shoes") {
    sizeHtml = `
      <div class="quickview-options">
        <h4>Kích Cỡ (EU)</h4>
        <div class="quickview-sizes">
          <button class="qv-size-btn" data-size="38">38</button>
          <button class="qv-size-btn" data-size="39">39</button>
          <button class="qv-size-btn" data-size="40">40</button>
          <button class="qv-size-btn" data-size="41">41</button>
          <button class="qv-size-btn" data-size="42">42</button>
        </div>
      </div>`;
  }

  // Build color options
  const colors = product.availableColors || [
    { name: "Đen", hex: "#000000" },
    { name: "Trắng", hex: "#f5f5f5" },
  ];
  const colorSwatches = colors
    .map(
      (c) =>
        `<button class="qv-color-btn" data-color="${c.name}" style="background-color:${c.hex};" title="${c.name}"></button>`,
    )
    .join("");

  // Discount badge
  let discountText = "";
  if (product.oldPrice) {
    const discount = Math.round((1 - product.price / product.oldPrice) * 100);
    discountText = `<span class="product-badge badge-sale" style="position:static;display:inline-block;margin-bottom:0.5rem;">-${discount}%</span>`;
  }

  const genderLabel =
    product.gender === "men"
      ? "Nam"
      : product.gender === "women"
        ? "Nữ"
        : product.gender === "kids"
          ? "Thiếu Nhi"
          : "Unisex";

  detailsEl.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;margin-bottom:0.35rem;">
      ${discountText}
      ${product.brand ? `<span class="product-brand" style="margin:0;">${product.brand}</span>` : ""}
      <span style="font-size:0.75rem;color:var(--text-muted);background:var(--bg-surface-elevated);padding:0.2rem 0.5rem;border-radius:2px;text-transform:uppercase;">${genderLabel}</span>
    </div>
    <h2 class="quickview-title">${product.name}</h2>
    <div class="quickview-price-wrap">
      <span class="quickview-price">${formatPrice(product.price)}</span>
      ${product.oldPrice ? `<span class="quickview-old-price">${formatPrice(product.oldPrice)}</span>` : ""}
    </div>
    <p style="font-size:0.9rem;color:var(--text-muted);line-height:1.5;">${product.description || ""}</p>
    <div class="quickview-options">
      <h4>Màu Sắc</h4>
      <div class="quickview-colors">${colorSwatches}</div>
    </div>
    ${sizeHtml}
    <button class="quickview-add-btn" id="qv-add-btn">
      <i class="fa-solid fa-cart-plus"></i> Thêm Vào Giỏ Hàng
    </button>
    <a href="product-detail.html?id=${product.id}" class="quickview-detail-link" onclick="closeQuickView()">Xem chi tiết sản phẩm <i class="fa-solid fa-arrow-right"></i></a>
  `;

  // Wire up interactions with default pre-selection
  let selectedColor = colors.length > 0 ? colors[0].name : "Tiêu chuẩn";
  let selectedSize = null;
  if (product.productType === "clothing") selectedSize = "M";
  else if (product.productType === "shoes") selectedSize = "40";

  // Pre-activate default color in UI
  const firstColorBtn = detailsEl.querySelector(".qv-color-btn");
  if (firstColorBtn) firstColorBtn.classList.add("active");

  // Pre-activate default size in UI
  const defaultSizeBtn =
    detailsEl.querySelector(`.qv-size-btn[data-size="${selectedSize}"]`) ||
    detailsEl.querySelector(".qv-size-btn");
  if (defaultSizeBtn) {
    defaultSizeBtn.classList.add("active");
    selectedSize = defaultSizeBtn.dataset.size;
  }

  detailsEl.querySelectorAll(".qv-size-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      detailsEl.querySelectorAll(".qv-size-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSize = btn.dataset.size;
    });
  });

  detailsEl.querySelectorAll(".qv-color-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      detailsEl.querySelectorAll(".qv-color-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedColor = btn.dataset.color;
    });
  });

  document.getElementById("qv-add-btn").addEventListener("click", () => {
    addToCart(product.id, selectedSize, selectedColor);
    closeQuickView();
  });

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  const overlay = document.getElementById("quickview-overlay");
  if (overlay) {
    overlay.classList.remove("active");
  }
  document.body.style.overflow = "";
}

// Close quick view with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeQuickView();
});

// =========================================================================
// Init Home Page
// =========================================================================
function initHomePage() {
  const menProducts = products.filter((p) => p.section === "men" || p.gender === "men").slice(0, 6);
  const womenProducts = products
    .filter((p) => p.section === "women" || p.gender === "women")
    .slice(0, 6);
  const kidsProducts = products
    .filter((p) => p.section === "kids" || p.gender === "kids")
    .slice(0, 6);
  const iconProducts = products
    .filter((p) => p.section === "icons" || p.section === "streetwear")
    .slice(0, 6);

  renderProducts("new-products", menProducts);
  renderProducts("hot-products", womenProducts);
  renderProducts("kids-products", kidsProducts);
  renderProducts("promo-products", iconProducts);
}

// =========================================================================
// Dark/Light Mode
// =========================================================================
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  toggleBtn.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  });
}

// =========================================================================
// Countdown Clock (Flash Sale) — with flip animation
// =========================================================================
function initCountdown() {
  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  let endTime = Number(localStorage.getItem("flashSaleEnd"));
  const now = Date.now();
  if (!endTime || isNaN(endTime) || endTime <= now) {
    endTime = now + 3 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000;
    localStorage.setItem("flashSaleEnd", endTime);
  }

  let prevValues = { days: "", hours: "", minutes: "", seconds: "" };

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance < 0) {
      endTime = Date.now() + 3 * 24 * 60 * 60 * 1000;
      localStorage.setItem("flashSaleEnd", endTime);
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    updateCountdownUnit("cd-days", days, prevValues, "days");
    updateCountdownUnit("cd-hours", hours, prevValues, "hours");
    updateCountdownUnit("cd-minutes", minutes, prevValues, "minutes");
    updateCountdownUnit("cd-seconds", seconds, prevValues, "seconds");
  }, 1000);
}

function updateCountdownUnit(elementId, value, prevValues, key) {
  const el = document.getElementById(elementId);
  if (!el) return;

  if (prevValues[key] !== value) {
    el.innerText = value;
    prevValues[key] = value;
  }
}

// =========================================================================
// Products Page (Search & Filter)
// =========================================================================
function initProductsPage() {
  const container = document.getElementById("all-products");
  if (!container) return;

  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");
  const brandSelect = document.getElementById("filter-brand");
  const colorSelect = document.getElementById("filter-color");
  const priceSelect = document.getElementById("filter-price");
  const resetBtn = document.getElementById("reset-filter-btn");
  const countBadge = document.getElementById("product-count-badge");
  const activeTagsContainer = document.getElementById("active-filter-tags");

  // Read URL params & normalize synonyms
  const urlParams = new URLSearchParams(window.location.search);
  const urlKeyword = urlParams.get("q");
  const rawSection =
    urlParams.get("section") || urlParams.get("gender") || urlParams.get("category");
  let urlSection = rawSection ? rawSection.toLowerCase().trim() : null;
  if (urlSection === "woman") urlSection = "women";
  if (urlSection === "man") urlSection = "men";
  if (urlSection === "kid") urlSection = "kids";

  const urlType = urlParams.get("type");

  if (urlKeyword && searchInput) {
    searchInput.value = urlKeyword;
  }

  if (urlSection) {
    const sectionTitleMap = {
      men: "MEN · ĐỒ THỂ THAO NAM",
      women: "WOMEN · ĐỒ THỂ THAO NỮ",
      kids: "KIDS · THIẾU NHI VẬN ĐỘNG",
      streetwear: "STREETWEAR · TECH FLEECE & HOODIE",
      icons: "ICONS · PHIÊN BẢN KINH ĐIỂN",
    };
    const monumentTitle = document.querySelector(".archive-monument-title");
    if (monumentTitle) {
      monumentTitle.innerText = urlSection.toUpperCase();
    }
    const subtitle = document.querySelector(".archive-subtitle");
    if (subtitle && sectionTitleMap[urlSection]) {
      subtitle.innerText = sectionTitleMap[urlSection];
    }
  }

  if (urlType) {
    const cb = document.querySelector(`.cat-filter[value="${urlType}"]`);
    if (cb) cb.checked = true;
  }

  function applyFilters() {
    let filtered = [...products];

    // 1. Search Keyword
    const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";
    if (keyword) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(keyword) ||
          (p.brand && p.brand.toLowerCase().includes(keyword)) ||
          (p.description && p.description.toLowerCase().includes(keyword)),
      );
    }

    // 2. Section / Tab Filter (handles both exact section and matching gender)
    if (urlSection) {
      if (urlSection === "men") {
        filtered = filtered.filter((p) => p.section === "men" || p.gender === "men");
      } else if (urlSection === "women") {
        filtered = filtered.filter((p) => p.section === "women" || p.gender === "women");
      } else if (urlSection === "kids") {
        filtered = filtered.filter((p) => p.section === "kids" || p.gender === "kids");
      } else {
        filtered = filtered.filter((p) => p.section === urlSection);
      }
    }

    // 3. Brand Filter Dropdown (sidebar)
    if (brandSelect && brandSelect.value !== "all") {
      filtered = filtered.filter((p) => p.brand === brandSelect.value);
    }

    // 4. Color Filter Dropdown (sidebar)
    if (colorSelect && colorSelect.value !== "all") {
      const cVal = colorSelect.value;
      filtered = filtered.filter(
        (p) =>
          p.color === cVal ||
          (p.availableColors && p.availableColors.some((c) => c.name.toLowerCase().includes(cVal))),
      );
    }

    // 5. Category Checkboxes (Shoes / Clothing / Accessory)
    const selectedCategories = Array.from(document.querySelectorAll(".cat-filter:checked")).map(
      (cb) => cb.value,
    );
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.productType));
    }

    // 6. Price Filter Dropdown (sidebar)
    if (priceSelect && priceSelect.value !== "all") {
      const pVal = priceSelect.value;
      filtered = filtered.filter((p) => {
        if (pVal === "under2m") return p.price < 2000000;
        if (pVal === "2m-to-5m") return p.price >= 2000000 && p.price <= 5000000;
        if (pVal === "over5m") return p.price > 5000000;
        return true;
      });
    }

    // 7. Sort
    const sortVal = sortSelect ? sortSelect.value : "default";
    if (sortVal === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    // Update Result Counter
    if (countBadge) {
      countBadge.innerText = `Đang hiển thị ${filtered.length} sản phẩm`;
    }

    // Render active filter tags
    updateActiveFilterTags();

    renderProducts("all-products", filtered);
  }

  function updateActiveFilterTags() {
    if (!activeTagsContainer) return;
    const tags = [];

    if (brandSelect && brandSelect.value !== "all") {
      tags.push({
        label: `Hãng: ${brandSelect.value}`,
        reset: () => {
          brandSelect.value = "all";
          applyFilters();
        },
      });
    }
    if (colorSelect && colorSelect.value !== "all") {
      tags.push({
        label: `Màu: ${colorSelect.options[colorSelect.selectedIndex].text}`,
        reset: () => {
          colorSelect.value = "all";
          applyFilters();
        },
      });
    }
    if (priceSelect && priceSelect.value !== "all") {
      tags.push({
        label: `Giá: ${priceSelect.options[priceSelect.selectedIndex].text}`,
        reset: () => {
          priceSelect.value = "all";
          applyFilters();
        },
      });
    }
    const checkedCats = Array.from(document.querySelectorAll(".cat-filter:checked"));
    checkedCats.forEach((cb) => {
      const labelText = cb.closest("label").innerText.trim();
      tags.push({
        label: labelText,
        reset: () => {
          cb.checked = false;
          applyFilters();
        },
      });
    });

    activeTagsContainer.innerHTML = tags
      .map(
        (t, idx) =>
          `<span class="filter-tag-pill">${t.label} <button type="button" data-tag-idx="${idx}" title="Xóa"><i class="fa-solid fa-xmark"></i></button></span>`,
      )
      .join("");

    activeTagsContainer.querySelectorAll("button").forEach((btn) => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute("data-tag-idx"));
        if (tags[idx]) tags[idx].reset();
      };
    });
  }

  // Reset Filters
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (brandSelect) brandSelect.value = "all";
      if (colorSelect) colorSelect.value = "all";
      if (priceSelect) priceSelect.value = "all";
      if (sortSelect) sortSelect.value = "default";
      document.querySelectorAll(".cat-filter").forEach((cb) => (cb.checked = false));
      applyFilters();
    });
  }

  // Event Listeners
  if (document.getElementById("search-btn")) {
    document.getElementById("search-btn").addEventListener("click", applyFilters);
  }
  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") applyFilters();
    });
  }

  [brandSelect, colorSelect, priceSelect, sortSelect].forEach((sel) => {
    if (sel) sel.addEventListener("change", applyFilters);
  });

  document
    .querySelectorAll(".cat-filter")
    .forEach((cb) => cb.addEventListener("change", applyFilters));

  // Run once on load
  applyFilters();
}

// =========================================================================
// Product Detail Page
// =========================================================================
function initProductDetailPage() {
  const container = document.getElementById("product-detail-container");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get("id");
  const productId = rawId ? parseInt(rawId) : 1;
  const product = products.find((p) => p.id === productId) || products[0];

  if (!product) {
    container.innerHTML =
      '<h2 style="text-align: center; margin-top: 2rem;">Không tìm thấy sản phẩm.</h2>';
    return;
  }

  let sizeHtml = "";
  if (product.productType === "clothing") {
    sizeHtml = `
            <div class="size-selector">
                <p><strong>Chọn Kích Cỡ (Áo/Quần/Váy):</strong> <span id="selected-size-text" style="color: var(--primary);">Chưa chọn</span></p>
                <div class="size-options">
                    <button class="size-btn" data-size="S">S</button>
                    <button class="size-btn" data-size="M">M</button>
                    <button class="size-btn" data-size="L">L</button>
                    <button class="size-btn" data-size="XL">XL</button>
                </div>
            </div>
        `;
  } else if (product.productType === "shoes") {
    sizeHtml = `
            <div class="size-selector">
                <p><strong>Chọn Kích Cỡ (Giày - EU):</strong> <span id="selected-size-text" style="color: var(--primary);">Chưa chọn</span></p>
                <div class="size-options">
                    <button class="size-btn" data-size="38">38</button>
                    <button class="size-btn" data-size="39">39</button>
                    <button class="size-btn" data-size="40">40</button>
                    <button class="size-btn" data-size="41">41</button>
                    <button class="size-btn" data-size="42">42</button>
                </div>
            </div>
        `;
  }

  // Build color swatches from product.availableColors
  const colors = product.availableColors || [
    { name: "Đen", hex: "#000000" },
    { name: "Trắng", hex: "#f5f5f5" },
  ];
  const colorSwatches = colors
    .map(
      (c) =>
        `<button class="color-btn" data-color="${c.name}" style="background-color:${c.hex};" title="${c.name}"></button>`,
    )
    .join("");

  let colorHtml = `
        <div class="color-selector">
            <p><strong>Chọn Màu Sắc:</strong> <span id="selected-color-text" style="color: var(--accent);">Chưa chọn</span></p>
            <div class="color-options">${colorSwatches}</div>
        </div>
    `;

  let badgeHtml = "";
  if (product.oldPrice) {
    const discount = Math.round((1 - product.price / product.oldPrice) * 100);
    badgeHtml = `<span class="product-badge badge-sale">-${discount}%</span>`;
  } else if (product.category === "Mới") {
    badgeHtml = '<span class="product-badge badge-new">New</span>';
  } else if (product.category === "Hot") {
    badgeHtml = '<span class="product-badge badge-hot">Hot</span>';
  }

  // 1. Breadcrumbs
  const typeLabel =
    product.productType === "shoes"
      ? "Giày"
      : product.productType === "clothing"
        ? "Quần Áo"
        : "Phụ Kiện";
  const breadcrumbsHtml = `
        <div class="breadcrumbs" data-ui="breadcrumb">
            <a href="index.html">Trang Chủ</a> <span>/</span>
            <a href="products.html">Sản Phẩm</a> <span>/</span>
            <a href="products.html?type=${product.productType}">${typeLabel}</a> <span>/</span>
            <span style="color:var(--text-main);">${product.name}</span>
        </div>
    `;

  // 2. Main Content
  const mainHtml = `
        <div class="product-detail-content">
            <div class="product-detail-image" style="position:relative;">
                ${badgeHtml}
                <img id="detail-main-img" src="${product.image}" alt="${product.name}" style="transition: opacity 0.3s ease;">
            </div>
            <div class="product-detail-info">
                <h1 class="product-detail-title">${product.name}</h1>
                <div class="price-container">
                    <span id="detail-price" class="product-detail-price">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span id="detail-old-price" class="product-detail-old-price">${formatPrice(product.oldPrice)}</span>` : ""}
                </div>
                ${colorHtml}
                ${sizeHtml}
                <button class="btn btn-primary" id="btn-add-to-cart" style="width: 100%; padding: 1rem; margin-top: 1.5rem;">
                    Thêm Vào Giỏ Hàng
                </button>
                <div style="margin-top:2rem;line-height:1.8;padding-top:1rem;">
                    <h3 style="font-family:var(--font-display);font-size:1.1rem;text-transform:uppercase;margin-bottom:0.75rem;">Thông Số & Công Nghệ</h3>
                    <p>${product.description || "Thiết kế thể thao hiệu suất cao của LuxeSport, tối ưu chuyển động và tăng tốc bền bỉ."}</p>
                    <ul style="margin-top:1rem;padding-left:1.25rem;">
                        <li>Thương hiệu: <strong>${product.brand || "LuxeSport Lab"}</strong></li>
                        <li>Bộ môn: <strong>${product.activity ? product.activity.toUpperCase() : "TRAINING & RUNNING"}</strong></li>
                        <li>Phân loại: <strong>${product.gender ? (product.gender === "men" ? "Nam (Men)" : product.gender === "women" ? "Nữ (Women)" : product.gender === "kids" ? "Thiếu Nhi (Kids)" : "Unisex") : "Đa dụng"}</strong></li>
                        <li>Chính sách: Đổi size và chạy thử 30 ngày trên toàn hệ thống</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

  // 3. Related Products
  const relatedHtml = `
        <div style="margin-top: 5rem;">
            <h2 class="section-title">Sản Phẩm Liên Quan</h2>
            <div class="product-grid" id="related-products"></div>
        </div>
    `;

  container.innerHTML = breadcrumbsHtml + mainHtml + relatedHtml;

  // Render related products (same productType, exclude current)
  const relatedProducts = products
    .filter((p) => p.productType === product.productType && p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  renderProducts("related-products", relatedProducts);

  // Hover image swap on detail page
  if (product.imageHover) {
    const mainImg = document.getElementById("detail-main-img");
    mainImg.addEventListener("mouseenter", () => {
      mainImg.src = product.imageHover;
    });
    mainImg.addEventListener("mouseleave", () => {
      mainImg.src = product.image;
    });
    mainImg.style.cursor = "zoom-in";
  }

  // Pre-select first color and default size
  let selectedColor = colors.length > 0 ? colors[0].name : "Tiêu chuẩn";
  let selectedSize = null;
  if (product.productType === "clothing") selectedSize = "M";
  else if (product.productType === "shoes") selectedSize = "40";

  const sizeBtns = document.querySelectorAll(".size-btn");
  const sizeText = document.getElementById("selected-size-text");
  if (sizeBtns.length > 0) {
    const defaultBtn =
      document.querySelector(`.size-btn[data-size="${selectedSize}"]`) || sizeBtns[0];
    if (defaultBtn) {
      defaultBtn.classList.add("active");
      selectedSize = defaultBtn.getAttribute("data-size");
      if (sizeText) sizeText.innerText = selectedSize;
    }

    sizeBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        sizeBtns.forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");
        selectedSize = e.target.getAttribute("data-size");
        if (sizeText) sizeText.innerText = selectedSize;
      });
    });
  }

  const colorBtns = document.querySelectorAll(".color-btn");
  const colorText = document.getElementById("selected-color-text");
  if (colorBtns.length > 0) {
    colorBtns[0].classList.add("active");
    selectedColor = colorBtns[0].getAttribute("data-color");
    if (colorText) colorText.innerText = selectedColor;

    colorBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        colorBtns.forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");
        selectedColor = e.target.getAttribute("data-color");
        if (colorText) colorText.innerText = selectedColor;
      });
    });
  }

  const addToCartBtn = document.getElementById("btn-add-to-cart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      addToCart(product.id, selectedSize, selectedColor);
    });
  }
}

// =========================================================================
// Theme Toggle (Dark Mode / Light Mode)
// =========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem("luxeshop_theme") || "dark";
  applyTheme(savedTheme);

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("luxeshop_theme", newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (document.body) {
    document.body.setAttribute("data-theme", theme);
  }

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    const icon = toggleBtn.querySelector("i");
    if (icon) {
      if (theme === "dark") {
        icon.className = "fa-solid fa-sun";
        toggleBtn.title = "Chuyển sang chế độ sáng";
      } else {
        icon.className = "fa-solid fa-moon";
        toggleBtn.title = "Chuyển sang chế độ tối";
      }
    }
  }
}

// =========================================================================
// Header Search
// =========================================================================
function initHeaderSearch() {
  const searchInput = document.getElementById("header-search-input");
  const searchBtn = document.getElementById("header-search-btn");
  if (!searchInput || !searchBtn) return;

  function doSearch() {
    const keyword = searchInput.value.trim();
    if (keyword) {
      window.location.href = `products.html?q=${encodeURIComponent(keyword)}`;
    }
  }

  searchBtn.addEventListener("click", doSearch);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") doSearch();
  });
}

// =========================================================================
// Native Lightweight Scroll Reveal (Zero Library Overhead)
// =========================================================================
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length) return;

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.05 },
    );
    elements.forEach((el) => observer.observe(el));
  } else {
    elements.forEach((el) => el.classList.add("is-visible"));
  }
}

// =========================================================================
// Init on DOM Ready
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "";
  initTheme();
  initHeaderSearch();
  initScrollReveal();

  // Kiểm tra trang hiện tại linh hoạt (hỗ trợ cả Localhost, GitHub Pages, Live Server)
  const path = window.location.pathname;
  if (
    document.getElementById("countdown") ||
    document.getElementById("flash-sale-products") ||
    path.includes("index.html") ||
    path === "/" ||
    path.endsWith("/") ||
    path.endsWith("ASM")
  ) {
    initHomePage();
    initCountdown();
  } else if (document.getElementById("all-products") || path.includes("products.html")) {
    initProductsPage();
  } else if (document.getElementById("product-detail-container") || path.includes("product-detail.html")) {
    initProductDetailPage();
  }
});
