// =========================================================================
// Hệ thống Quản lý Tài khoản & Xác thực (Auth: Đăng ký, Đăng nhập, Đăng xuất)
// =========================================================================

// Khởi tạo danh sách người dùng mẫu nếu chưa có
function initSampleUsers() {
    if (!localStorage.getItem('luxeshop_users')) {
        const sampleUsers = [
            {
                id: 1,
                fullname: "Nguyễn Văn A",
                email: "admin@luxeshop.com",
                password: "password123",
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                fullname: "Trần Thị B",
                email: "customer@gmail.com",
                password: "123456",
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('luxeshop_users', JSON.stringify(sampleUsers));
    }
}

// Lấy thông tin user đang đăng nhập
function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem('luxeshop_current_user')) || null;
    } catch (e) {
        return null;
    }
}

// Lưu session đăng nhập
function setCurrentUser(user) {
    if (!user) {
        localStorage.removeItem('luxeshop_current_user');
    } else {
        localStorage.setItem('luxeshop_current_user', JSON.stringify(user));
    }
    updateAuthHeader();
}

// Tạo Modal Đăng nhập / Đăng ký dùng chung cho toàn bộ website
function createAuthModal() {
    if (document.getElementById('auth-modal-overlay')) return;

    const modalHtml = `
    <div class="auth-modal-overlay" id="auth-modal-overlay" onclick="handleAuthOverlayClick(event)">
        <div class="auth-modal" id="auth-modal">
            <button class="auth-modal-close" onclick="closeAuthModal()" title="Đóng">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="auth-modal-header">
                <div class="auth-tabs">
                    <button class="auth-tab-btn active" id="tab-login-btn" onclick="switchAuthTab('login')">Đăng Nhập</button>
                    <button class="auth-tab-btn" id="tab-register-btn" onclick="switchAuthTab('register')">Đăng Ký</button>
                </div>
            </div>

            <!-- FORM ĐĂNG NHẬP -->
            <form class="auth-form active" id="login-form" novalidate>
                <div class="auth-banner-title">
                    <h3>Chào mừng trở lại!</h3>
                    <p>Đăng nhập để nhận các ưu đãi độc quyền từ LuxeShop</p>
                </div>
                <div class="auth-alert error" id="login-alert" style="display: none;"></div>
                
                <div class="auth-field" id="field-login-email">
                    <label for="login-email"><i class="fa-regular fa-envelope"></i> Email</label>
                    <input type="email" id="login-email" placeholder="example@gmail.com" autocomplete="username">
                    <span class="auth-error-msg"></span>
                </div>

                <div class="auth-field" id="field-login-password">
                    <label for="login-password"><i class="fa-solid fa-lock"></i> Mật khẩu</label>
                    <div class="password-input-wrapper">
                        <input type="password" id="login-password" placeholder="Nhập mật khẩu" autocomplete="current-password">
                        <button type="button" class="toggle-password" onclick="togglePasswordVisibility('login-password', this)">
                            <i class="fa-regular fa-eye"></i>
                        </button>
                    </div>
                    <span class="auth-error-msg"></span>
                </div>

                <div class="auth-action-row">
                    <label class="remember-me">
                        <input type="checkbox" id="login-remember" checked> Ghi nhớ đăng nhập
                    </label>
                    <a href="javascript:void(0)" class="auth-link-forgot" onclick="alert('Vui lòng sử dụng tài khoản mẫu: admin@luxeshop.com / password123')">Quên mật khẩu?</a>
                </div>

                <button type="submit" class="btn btn-primary auth-submit-btn">Đăng Nhập Ngay</button>

                <div class="auth-switch-prompt">
                    Chưa có tài khoản? <a href="javascript:void(0)" onclick="switchAuthTab('register')">Đăng ký tài khoản mới</a>
                </div>
            </form>

            <!-- FORM ĐĂNG KÝ -->
            <form class="auth-form" id="register-form" novalidate>
                <div class="auth-banner-title">
                    <h3>Tạo tài khoản mới</h3>
                    <p>Trở thành thành viên LuxeShop để tích lũy điểm và nhận quà</p>
                </div>
                <div class="auth-alert error" id="register-alert" style="display: none;"></div>

                <div class="auth-field" id="field-reg-fullname">
                    <label for="reg-fullname"><i class="fa-regular fa-user"></i> Họ và Tên *</label>
                    <input type="text" id="reg-fullname" placeholder="Nguyễn Văn A">
                    <span class="auth-error-msg"></span>
                </div>

                <div class="auth-field" id="field-reg-email">
                    <label for="reg-email"><i class="fa-regular fa-envelope"></i> Email *</label>
                    <input type="email" id="reg-email" placeholder="email@domain.com" autocomplete="username">
                    <span class="auth-error-msg"></span>
                </div>

                <div class="auth-field" id="field-reg-password">
                    <label for="reg-password"><i class="fa-solid fa-lock"></i> Mật khẩu * (Tối thiểu 6 ký tự)</label>
                    <div class="password-input-wrapper">
                        <input type="password" id="reg-password" placeholder="Tối thiểu 6 ký tự" autocomplete="new-password">
                        <button type="button" class="toggle-password" onclick="togglePasswordVisibility('reg-password', this)">
                            <i class="fa-regular fa-eye"></i>
                        </button>
                    </div>
                    <span class="auth-error-msg"></span>
                </div>

                <div class="auth-field" id="field-reg-confirm">
                    <label for="reg-confirm"><i class="fa-solid fa-shield-halved"></i> Xác nhận mật khẩu *</label>
                    <div class="password-input-wrapper">
                        <input type="password" id="reg-confirm" placeholder="Nhập lại mật khẩu" autocomplete="new-password">
                        <button type="button" class="toggle-password" onclick="togglePasswordVisibility('reg-confirm', this)">
                            <i class="fa-regular fa-eye"></i>
                        </button>
                    </div>
                    <span class="auth-error-msg"></span>
                </div>

                <button type="submit" class="btn btn-primary auth-submit-btn">Đăng Ký Tài Khoản</button>

                <div class="auth-switch-prompt">
                    Đã có tài khoản? <a href="javascript:void(0)" onclick="switchAuthTab('login')">Đăng nhập ngay</a>
                </div>
            </form>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Khởi tạo Validator cho cả 2 form đăng nhập và đăng ký
    initAuthValidators();
}

function openAuthModal(tab = 'login') {
    createAuthModal();
    const overlay = document.getElementById('auth-modal-overlay');
    if (overlay) {
        switchAuthTab(tab);
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAuthModal() {
    const overlay = document.getElementById('auth-modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        clearAuthErrors();
    }
}

function handleAuthOverlayClick(e) {
    if (e.target.id === 'auth-modal-overlay') {
        closeAuthModal();
    }
}

function switchAuthTab(tab) {
    clearAuthErrors();
    const loginTabBtn = document.getElementById('tab-login-btn');
    const regTabBtn = document.getElementById('tab-register-btn');
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('register-form');

    if (!loginTabBtn || !regTabBtn || !loginForm || !regForm) return;

    if (tab === 'login') {
        loginTabBtn.classList.add('active');
        regTabBtn.classList.remove('active');
        loginForm.classList.add('active');
        regForm.classList.remove('active');
    } else {
        regTabBtn.classList.add('active');
        loginTabBtn.classList.remove('active');
        regForm.classList.add('active');
        loginForm.classList.remove('active');
    }
}

function clearAuthErrors() {
    document.querySelectorAll('.auth-field').forEach(el => {
        el.classList.remove('has-error');
        const err = el.querySelector('.auth-error-msg');
        if (err) err.innerText = '';
    });
    const logAlert = document.getElementById('login-alert');
    if (logAlert) {
        logAlert.style.display = 'none';
        logAlert.innerText = '';
    }
    const regAlert = document.getElementById('register-alert');
    if (regAlert) {
        regAlert.style.display = 'none';
        regAlert.innerText = '';
    }
}

function setFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.add('has-error');
    const msgEl = field.querySelector('.auth-error-msg');
    if (msgEl) msgEl.innerText = message;
}

function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fa-regular fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fa-regular fa-eye';
    }
}

// -------------------------------------------------------------------------
// Khởi tạo Validator cho Đăng ký & Đăng nhập (validator.js)
// -------------------------------------------------------------------------
function initAuthValidators() {
    if (typeof Validator !== 'function') return;

    // Validate Form Đăng nhập
    Validator({
        form: '#login-form',
        formGroupSelector: '.auth-field',
        errorSelector: '.auth-error-msg',
        rules: [
            Validator.isRequired('#login-email', 'Vui lòng nhập email đăng nhập.'),
            Validator.isEmail('#login-email', 'Định dạng email không hợp lệ (Ví dụ: name@domain.com).'),
            Validator.isRequired('#login-password', 'Vui lòng nhập mật khẩu.')
        ],
        onSubmit: handleLogin
    });

    // Validate Form Đăng ký
    Validator({
        form: '#register-form',
        formGroupSelector: '.auth-field',
        errorSelector: '.auth-error-msg',
        rules: [
            Validator.isRequired('#reg-fullname', 'Vui lòng nhập họ và tên.'),
            Validator.isRequired('#reg-email', 'Vui lòng nhập email.'),
            Validator.isEmail('#reg-email', 'Định dạng email không hợp lệ (Ví dụ: name@domain.com).'),
            Validator.isRequired('#reg-password', 'Vui lòng nhập mật khẩu.'),
            Validator.minLength('#reg-password', 6, 'Mật khẩu phải có độ dài tối thiểu 6 ký tự.'),
            Validator.isRequired('#reg-confirm', 'Vui lòng xác nhận mật khẩu.'),
            Validator.isConfirmed('#reg-confirm', () => document.getElementById('reg-password').value, 'Mật khẩu xác nhận không trùng khớp.')
        ],
        onSubmit: handleRegister
    });
}

// -------------------------------------------------------------------------
// Xử lý Đăng ký (Gọn hơn với Validator.js)
// -------------------------------------------------------------------------
function handleRegister(data) {
    const { 'reg-fullname': fullname, 'reg-email': email, 'reg-password': password } = data;
    const users = JSON.parse(localStorage.getItem('luxeshop_users')) || [];

    // Kiểm tra trùng email
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        return setFieldError('field-reg-email', 'Email này đã được đăng ký tài khoản. Vui lòng sử dụng email khác.');
    }

    // Thêm người dùng mới
    users.push({
        id: Date.now(),
        fullname,
        email,
        password,
        createdAt: new Date().toISOString()
    });
    localStorage.setItem('luxeshop_users', JSON.stringify(users));

    const notify = typeof showToast === 'function' ? showToast : alert;
    notify('Đăng ký tài khoản thành công! Vui lòng đăng nhập.');

    document.getElementById('register-form').reset();
    switchAuthTab('login');
    document.getElementById('login-email').value = email;
    document.getElementById('login-password').focus();
}

// -------------------------------------------------------------------------
// Xử lý Đăng nhập (Gọn hơn với Validator.js)
// -------------------------------------------------------------------------
function handleLogin(data) {
    const { 'login-email': email, 'login-password': password } = data;
    const users = JSON.parse(localStorage.getItem('luxeshop_users')) || [];
    const matchedUser = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (!matchedUser) {
        const alertBox = document.getElementById('login-alert');
        if (alertBox) {
            alertBox.innerText = 'Email hoặc mật khẩu không chính xác! Vui lòng thử lại.';
            alertBox.style.display = 'block';
        }
        return;
    }

    setCurrentUser({
        id: matchedUser.id,
        fullname: matchedUser.fullname,
        email: matchedUser.email
    });

    const notify = typeof showToast === 'function' ? showToast : alert;
    notify(`Xin chào, ${matchedUser.fullname}! Đăng nhập thành công.`);

    closeAuthModal();
    fillUserToCheckout();
}

// Fallback tương thích ngược
function handleRegisterSubmit(e) { if (e && e.preventDefault) e.preventDefault(); }
function handleLoginSubmit(e) { if (e && e.preventDefault) e.preventDefault(); }

// -------------------------------------------------------------------------
// Xử lý Đăng xuất (Mục 3.5.2)
// -------------------------------------------------------------------------
function handleLogout() {
    if (confirm("Bạn có chắc chắn muốn đăng xuất khỏi tài khoản?")) {
        setCurrentUser(null);
        if (typeof showToast === 'function') {
            showToast("Đã đăng xuất thành công.");
        } else {
            alert("Đã đăng xuất thành công.");
        }
    }
}

// -------------------------------------------------------------------------
// Cập nhật giao diện Header (Thể hiện trạng thái đã đăng nhập / chưa đăng nhập)
// -------------------------------------------------------------------------
function updateAuthHeader() {
    const user = getCurrentUser();
    const navActions = document.querySelector('.nav-actions');
    if (!navActions) return;

    let userContainer = document.getElementById('header-user-container');
    if (!userContainer) {
        userContainer = document.createElement('div');
        userContainer.id = 'header-user-container';
        userContainer.className = 'header-user-container';
        // Chèn trước nút theme-toggle hoặc nút giỏ hàng
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            navActions.insertBefore(userContainer, themeBtn);
        } else {
            navActions.prepend(userContainer);
        }
    }

    if (user) {
        // Đã đăng nhập: hiển thị Avatar + Tên và dropdown Đăng xuất
        userContainer.innerHTML = `
            <div class="user-dropdown-wrapper">
                <button class="user-profile-btn" onclick="toggleUserDropdown(event)" title="Tài khoản: ${user.fullname}">
                    <i class="fa-solid fa-circle-user"></i>
                    <span class="user-name-short">${user.fullname.split(' ').pop()}</span>
                    <i class="fa-solid fa-chevron-down dropdown-arrow"></i>
                </button>
                <div class="user-dropdown-menu" id="user-dropdown-menu">
                    <div class="user-dropdown-header">
                        <strong>${user.fullname}</strong>
                        <small>${user.email}</small>
                    </div>
                    <div class="user-dropdown-divider"></div>
                    <a href="javascript:void(0)" onclick="handleLogout()" class="user-dropdown-item text-danger">
                        <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
                    </a>
                </div>
            </div>
        `;
    } else {
        // Chưa đăng nhập: nút mở modal
        userContainer.innerHTML = `
            <button class="auth-btn-open" onclick="openAuthModal('login')" title="Đăng nhập / Đăng ký">
                <i class="fa-regular fa-user"></i>
                <span class="auth-btn-text">Tài Khoản</span>
            </button>
        `;
    }
}

function toggleUserDropdown(e) {
    e.stopPropagation();
    const menu = document.getElementById('user-dropdown-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Đóng dropdown khi click ngoài
document.addEventListener('click', (e) => {
    const menu = document.getElementById('user-dropdown-menu');
    if (menu && menu.classList.contains('active')) {
        if (!e.target.closest('.user-dropdown-wrapper')) {
            menu.classList.remove('active');
        }
    }
});

// Đóng auth modal với phím ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAuthModal();
    }
});

// Tự động điền thông tin người dùng vào checkout.html nếu đã đăng nhập
function fillUserToCheckout() {
    const user = getCurrentUser();
    if (!user) return;
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    if (fullnameInput && !fullnameInput.value) fullnameInput.value = user.fullname;
    if (emailInput && !emailInput.value) emailInput.value = user.email;
}

// Khởi chạy khi tài liệu sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    initSampleUsers();
    updateAuthHeader();
    fillUserToCheckout();
});
