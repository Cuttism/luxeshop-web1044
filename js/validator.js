// =========================================================================
// LUXESPORT — FORM VALIDATOR LIBRARY (validator.js)
// Reusable, lightweight, rule-based validation engine
// =========================================================================

function Validator(options) {
    const formElement = document.querySelector(options.form);
    if (!formElement) return null;

    const selectorRules = {};
    const formGroupSelector = options.formGroupSelector || '.auth-field';
    const errorSelector = options.errorSelector || '.auth-error-msg';

    function getParent(element, selector) {
        return element.closest(selector);
    }

    // Validate 1 input theo tất cả rules đã đăng ký cho nó
    function validate(inputElement, rule) {
        const parent = getParent(inputElement, formGroupSelector);
        const errorElement = parent ? parent.querySelector(errorSelector) : null;
        let errorMessage;

        const rules = selectorRules[rule.selector] || [];
        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            if (errorElement) errorElement.innerText = errorMessage;
            if (parent) parent.classList.add('has-error');
        } else {
            if (errorElement) errorElement.innerText = '';
            if (parent) parent.classList.remove('has-error');
        }

        return !errorMessage;
    }

    // Lắng nghe sự kiện submit form
    formElement.onsubmit = function (e) {
        e.preventDefault();

        let isFormValid = true;

        options.rules.forEach(function (rule) {
            const inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                const isValid = validate(inputElement, rule);
                if (!isValid) isFormValid = false;
            }
        });

        if (isFormValid) {
            if (typeof options.onSubmit === 'function') {
                const enableInputs = formElement.querySelectorAll('input:not([disabled]), textarea:not([disabled]), select:not([disabled])');
                const formValues = Array.from(enableInputs).reduce(function (values, input) {
                    if (input.type === 'checkbox') {
                        values[input.id || input.name] = input.checked;
                    } else if (input.type === 'radio') {
                        if (input.checked) values[input.name] = input.value;
                    } else {
                        values[input.id || input.name] = input.value.trim();
                    }
                    return values;
                }, {});

                options.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }
    };

    // Đăng ký rules và sự kiện blur/input cho từng trường
    options.rules.forEach(function (rule) {
        if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test);
        } else {
            selectorRules[rule.selector] = [rule.test];
        }

        const inputElements = formElement.querySelectorAll(rule.selector);
        Array.from(inputElements).forEach(function (inputElement) {
            inputElement.onblur = function () {
                validate(inputElement, rule);
            };

            inputElement.oninput = function () {
                const parent = getParent(inputElement, formGroupSelector);
                const errorElement = parent ? parent.querySelector(errorSelector) : null;
                if (errorElement) errorElement.innerText = '';
                if (parent) parent.classList.remove('has-error');
            };
        });
    });

    return {
        validateForm() {
            let isFormValid = true;
            options.rules.forEach(function (rule) {
                const inputElement = formElement.querySelector(rule.selector);
                if (inputElement && !validate(inputElement, rule)) isFormValid = false;
            });
            return isFormValid;
        }
    };
}

// =========================================================================
// Các quy tắc kiểm tra (Rules)
// =========================================================================

// Bắt buộc nhập
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return (value !== undefined && value !== null && value.toString().trim() !== '') 
                ? undefined 
                : (message || 'Vui lòng nhập trường này.');
        }
    };
};

// Định dạng Email
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            if (!value || !value.toString().trim()) return undefined;
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(value.toString().trim()) 
                ? undefined 
                : (message || 'Định dạng email không hợp lệ (Ví dụ: name@domain.com).');
        }
    };
};

// Độ dài tối thiểu
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            if (!value) return undefined;
            return value.length >= min 
                ? undefined 
                : (message || `Mật khẩu phải có độ dài tối thiểu ${min} ký tự.`);
        }
    };
};

// Xác nhận mật khẩu trùng khớp
Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            const confirmVal = typeof getConfirmValue === 'function' ? getConfirmValue() : getConfirmValue;
            return value === confirmVal 
                ? undefined 
                : (message || 'Mật khẩu xác nhận không trùng khớp.');
        }
    };
};
