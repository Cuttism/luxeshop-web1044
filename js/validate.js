// Validate form thanh toán (checkout.html)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');
    if (!form) return;

    const fields = [
        {
            input: document.getElementById('fullname'),
            group: document.getElementById('group-fullname'),
            validate: (val) => val.trim() !== ''
        },
        {
            input: document.getElementById('email'),
            group: document.getElementById('group-email'),
            validate: (val) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return val.trim() !== '' && emailRegex.test(val.trim());
            }
        },
        {
            input: document.getElementById('phone'),
            group: document.getElementById('group-phone'),
            validate: (val) => {
                const phoneRegex = /^[0-9]{9,11}$/;
                return val.trim() !== '' && phoneRegex.test(val.trim());
            }
        },
        {
            input: document.getElementById('address'),
            group: document.getElementById('group-address'),
            validate: (val) => val.trim() !== ''
        }
    ];

    // Hàm kiểm tra 1 trường cụ thể
    function checkField(item) {
        if (!item.input || !item.group) return true;
        const isValid = item.validate(item.input.value);
        if (!isValid) {
            item.group.classList.add('error');
            item.group.classList.add('has-error');
        } else {
            item.group.classList.remove('error');
            item.group.classList.remove('has-error');
        }
        return isValid;
    }

    // Gắn sự kiện blur (rời khỏi ô khi nhập sai yêu cầu -> hiện cảnh báo)
    // và sự kiện input (khi đang gõ lại -> ẩn cảnh báo)
    fields.forEach(item => {
        if (!item.input || !item.group) return;

        // Khi người dùng click ra ngoài (blur) -> kiểm tra và hiển thị cảnh báo nếu sai
        item.input.addEventListener('blur', () => {
            checkField(item);
        });

        // Khi người dùng gõ phím (input) -> ẩn cảnh báo lỗi ngay
        item.input.addEventListener('input', () => {
            item.group.classList.remove('error');
            item.group.classList.remove('has-error');
        });
    });

    // Xử lý khi Submit form
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isAllValid = true;
        let firstInvalidInput = null;

        fields.forEach(item => {
            const isValid = checkField(item);
            if (!isValid) {
                isAllValid = false;
                if (!firstInvalidInput && item.input) {
                    firstInvalidInput = item.input;
                }
            }
        });

        if (!isAllValid) {
            if (firstInvalidInput) firstInvalidInput.focus();
            return;
        }

        // Kiểm tra giỏ hàng
        if (typeof cart !== 'undefined' && cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm trước khi thanh toán.");
            return;
        }

        alert("Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại LuxeShop.");

        // Xóa giỏ hàng và chuyển về trang chủ
        if (typeof cart !== 'undefined') {
            cart = [];
            if (typeof saveCart === 'function') saveCart();
        }
        window.location.href = "index.html";
    });
});
