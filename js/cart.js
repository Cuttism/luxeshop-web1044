// Quản lý giỏ hàng với LocalStorage
let cart = JSON.parse(localStorage.getItem('luxeshop_cart')) || [];

function getPriceForSize(basePrice, productType, size) {
    return Number(basePrice) || 0;
}

function saveCart() {
    localStorage.setItem('luxeshop_cart', JSON.stringify(cart));
    updateCartCount();
    if (typeof renderSideCart === 'function') renderSideCart();
}

function addToCart(productId, size = null, color = null, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Gán thuộc tính mặc định nếu chưa chọn
    if (!color) {
        if (product.availableColors && product.availableColors.length > 0) {
            color = product.availableColors[0].name;
        } else {
            color = "Tiêu chuẩn";
        }
    }

    if (!size && product.productType !== 'accessory') {
        if (product.productType === 'clothing') {
            size = "M"; // Size áo/quần mặc định
        } else if (product.productType === 'shoes') {
            size = "40"; // Size giày mặc định
        }
    }

    let cartItemId = productId.toString();
    if (size) cartItemId += `-${size}`;
    if (color) cartItemId += `-${color}`;

    const existingItem = cart.find(item => (item.cartItemId === cartItemId) || (item.id === productId && item.size === size && item.color === color));
    if (existingItem) {
        existingItem.quantity += Number(quantity) || 1;
    } else {
        const finalPrice = getPriceForSize(product.price, product.productType, size);
        let finalOldPrice = product.oldPrice;
        
        cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand || 'LuxeSport Lab',
            price: finalPrice,
            oldPrice: finalOldPrice,
            image: product.image,
            cartItemId: cartItemId,
            size: size,
            color: color,
            quantity: Number(quantity) || 1,
            productType: product.productType
        });
    }

    saveCart();
    showToast(`Đã thêm "${product.name}"${size ? ' (Size: ' + size + ')' : ''}${color ? ' (Màu: ' + color + ')' : ''} vào giỏ hàng!`);
    openSideCart();
}

function changeCartItemSize(oldCartItemId, newSize) {
    const itemIndex = cart.findIndex(item => (item.cartItemId || item.id.toString()) === oldCartItemId.toString());
    if (itemIndex === -1) return;
    
    const item = cart[itemIndex];
    item.size = newSize;
    
    const product = products.find(p => p.id === item.id);
    if (product) {
        item.price = getPriceForSize(product.price, product.productType, newSize);
        if (product.oldPrice) {
             const priceDiff = item.price - product.price;
             item.oldPrice = product.oldPrice + priceDiff;
        }
    }
    
    let newCartItemId = item.id.toString();
    if (item.size) newCartItemId += `-${item.size}`;
    if (item.color) newCartItemId += `-${item.color}`;
    
    item.cartItemId = newCartItemId;
    
    const existingIndex = cart.findIndex((i, idx) => idx !== itemIndex && i.cartItemId === newCartItemId);
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += item.quantity;
        cart.splice(itemIndex, 1);
    }
    
    saveCart();
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => (item.cartItemId || item.id.toString()) !== cartItemId.toString());
    saveCart();
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
}

function updateQuantity(cartItemId, newQuantity) {
    const q = parseInt(newQuantity);
    if (isNaN(q) || q < 1) {
        removeFromCart(cartItemId);
        return;
    }
    const item = cart.find(item => (item.cartItemId || item.id.toString()) === cartItemId.toString());
    if (item) {
        item.quantity = q;
        saveCart();
        if (window.location.pathname.includes('cart.html')) {
            renderCartPage();
        }
    }
}

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countEl.textContent = totalItems;
    }
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Khởi tạo đếm giỏ hàng khi load trang
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    initGlobalUI();
});

// ==========================================
// TOAST & SIDE-CART UI
// ==========================================
function initGlobalUI() {
    // 1. Toast Container
    if (!document.getElementById('toast-container')) {
        const toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    // 2. Side Cart HTML
    if (!document.getElementById('side-cart-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'side-cart-overlay';
        overlay.className = 'side-cart-overlay';
        overlay.onclick = closeSideCart;
        document.body.appendChild(overlay);

        const sideCart = document.createElement('div');
        sideCart.id = 'side-cart';
        sideCart.className = 'side-cart';
        sideCart.innerHTML = `
            <div class="side-cart-header">
                <h2>Giỏ Hàng Của Bạn</h2>
                <button class="close-cart-btn" onclick="closeSideCart()"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="side-cart-body" id="side-cart-items">
                <!-- Items render here -->
            </div>
            <div class="side-cart-footer">
                <div class="side-cart-total">
                    <span>Tổng phụ:</span>
                    <span id="side-cart-total-price">0 đ</span>
                </div>
                <a href="cart.html" class="side-cart-checkout-btn">Xem Giỏ Hàng & Thanh Toán</a>
            </div>
        `;
        document.body.appendChild(sideCart);
        
        // Render initial items
        renderSideCart();
    }
}

function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent);"></i> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function openSideCart() {
    const overlay = document.getElementById('side-cart-overlay');
    const cartEl = document.getElementById('side-cart');
    if (overlay && cartEl) {
        overlay.classList.add('active');
        cartEl.classList.add('active');
    }
}

function closeSideCart() {
    const overlay = document.getElementById('side-cart-overlay');
    const cartEl = document.getElementById('side-cart');
    if (overlay && cartEl) {
        overlay.classList.remove('active');
        cartEl.classList.remove('active');
    }
}

function renderSideCart() {
    const container = document.getElementById('side-cart-items');
    const totalEl = document.getElementById('side-cart-total-price');
    if (!container || !totalEl) return;

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:2rem;">Giỏ hàng trống.</p>';
        totalEl.innerText = '0 đ';
        return;
    }

    let total = 0;
    container.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div style="display:flex; gap:1rem; margin-bottom:1.25rem; padding-bottom:0.25rem;">
                <img src="${item.image}" alt="${item.name}" style="width:60px; height:60px; object-fit:cover; border-radius:4px;">
                <div style="flex:1;">
                    <div style="font-weight:500; font-size:0.95rem; margin-bottom:0.25rem;">${item.name}</div>
                    <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.25rem;">
                        ${item.size ? `Size: ${item.size}` : ''} 
                        ${item.color ? `| Màu: ${item.color}` : ''}
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:var(--accent); font-weight:600;">${formatPrice(item.price)}</span>
                        <div style="display:flex; align-items:center; gap:0.5rem; background:var(--bg-main); padding:0.2rem 0.5rem; border-radius:4px; border:1px solid var(--border);">
                            <button onclick="updateQuantity('${item.cartItemId || item.id}', ${item.quantity - 1})" style="background:none; border:none; color:var(--text-main); cursor:pointer;">-</button>
                            <span style="font-size:0.9rem;">${item.quantity}</span>
                            <button onclick="updateQuantity('${item.cartItemId || item.id}', ${item.quantity + 1})" style="background:none; border:none; color:var(--text-main); cursor:pointer;">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    totalEl.innerText = formatPrice(total);
}
