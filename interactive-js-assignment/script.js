// ========================================
// PART 1: JavaScript Event Handling
// ========================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Click event handling
    const clickBtn = document.getElementById('clickBtn');
    const eventOutput = document.getElementById('eventOutput');
    let clickCount = 0;
    
    clickBtn.addEventListener('click', function() {
        clickCount++;
        eventOutput.textContent = `Button clicked ${clickCount} times!`;
        clickBtn.style.transform = 'scale(0.95)';
        setTimeout(() => clickBtn.style.transform = 'scale(1)', 150);
    });
    
    // Hover event handling
    const hoverBox = document.getElementById('hoverBox');
    
    hoverBox.addEventListener('mouseenter', function() {
        eventOutput.textContent = 'Mouse entered the hover box!';
    });
    
    hoverBox.addEventListener('mouseleave', function() {
        eventOutput.textContent = 'Mouse left the hover box!';
    });
    
    // Keyboard event handling
    const keyInput = document.getElementById('keyInput');
    
    keyInput.addEventListener('keyup', function(event) {
        eventOutput.textContent = `You typed: "${event.target.value}" (Key: ${event.key})`;
    });
    
    keyInput.addEventListener('focus', function() {
        this.style.borderColor = '#667eea';
    });
    
    keyInput.addEventListener('blur', function() {
        this.style.borderColor = '#ddd';
    });
});

// ========================================
// PART 2: Interactive Elements
// ========================================

// Theme Toggle Feature
const themeToggle = document.getElementById('themeToggle');
let isDarkTheme = false;

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    isDarkTheme = !isDarkTheme;
    
    if (isDarkTheme) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});

// Counter Game Feature
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const counterValue = document.getElementById('counterValue');
let count = 0;

function updateCounter() {
    counterValue.textContent = count;
    counterValue.style.transform = 'scale(1.2)';
    setTimeout(() => counterValue.style.transform = 'scale(1)', 200);
}

decreaseBtn.addEventListener('click', function() {
    count--;
    updateCounter();
});

increaseBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateCounter();
});

// FAQ Collapsible Feature
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');
        
        // Toggle answer visibility
        answer.classList.toggle('show');
        arrow.classList.toggle('rotate');
        
        // Close other FAQ items
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== this) {
                otherQuestion.nextElementSibling.classList.remove('show');
                otherQuestion.querySelector('.arrow').classList.remove('rotate');
            }
        });
    });
});

// Tab Interface Feature
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remove active class from all tabs and panels
        tabBtns.forEach(tab => tab.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding panel
        this.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// ========================================
// PART 3: Form Validation
// ========================================

const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');
const formSuccess = document.getElementById('formSuccess');

// Validation functions
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
    return nameRegex.test(name.trim());
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function validatePhone(phone) {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone.trim());
}

// Show error message
function showError(input, message) {
    const errorElement = document.getElementById(input.id + 'Error');
    errorElement.textContent = message;
    input.classList.add('invalid');
    input.classList.remove('valid');
}

// Show success
function showSuccess(input) {
    const errorElement = document.getElementById(input.id + 'Error');
    errorElement.textContent = '';
    input.classList.add('valid');
    input.classList.remove('invalid');
}

// Real-time validation
nameInput.addEventListener('blur', function() {
    if (!validateName(this.value)) {
        showError(this, 'Name must be 2-30 characters and contain only letters');
    } else {
        showSuccess(this);
    }
});

emailInput.addEventListener('blur', function() {
    if (!validateEmail(this.value)) {
        showError(this, 'Please enter a valid email address');
    } else {
        showSuccess(this);
    }
});

passwordInput.addEventListener('blur', function() {
    if (!validatePassword(this.value)) {
        showError(this, 'Password must be 8+ characters with uppercase, lowercase, and number');
    } else {
        showSuccess(this);
    }
});

phoneInput.addEventListener('blur', function() {
    if (!validatePhone(this.value)) {
        showError(this, 'Please enter a valid phone number (e.g., 123-456-7890)');
    } else {
        showSuccess(this);
    }
});

// Form submission validation
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    let isValid = true;
    
    // Validate all fields
    if (!validateName(nameInput.value)) {
        showError(nameInput, 'Name must be 2-30 characters and contain only letters');
        isValid = false;
    } else {
        showSuccess(nameInput);
    }
    
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    } else {
        showSuccess(emailInput);
    }
    
    if (!validatePassword(passwordInput.value)) {
        showError(passwordInput, 'Password must be 8+ characters with uppercase, lowercase, and number');
        isValid = false;
    } else {
        showSuccess(passwordInput);
    }
    
    if (!validatePhone(phoneInput.value)) {
        showError(phoneInput, 'Please enter a valid phone number');
        isValid = false;
    } else {
        showSuccess(phoneInput);
    }
    
    // Show success message if all fields are valid
    if (isValid) {
        formSuccess.textContent = '✅ Form submitted successfully! All fields are valid.';
        formSuccess.style.display = 'block';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            formSuccess.style.display = 'none';
            // Remove validation classes
            [nameInput, emailInput, passwordInput, phoneInput].forEach(input => {
                input.classList.remove('valid', 'invalid');
                document.getElementById(input.id + 'Error').textContent = '';
            });
        }, 3000);
    } else {
        formSuccess.style.display = 'none';
    }
});

// Initialize page
console.log('Interactive Web Page Loaded Successfully!');
console.log('Features: Event Handling, Interactive Elements, Form Validation');
