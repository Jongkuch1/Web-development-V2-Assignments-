// ========================================
// PART 2: JavaScript Functions - Scope, Parameters & Return Values
// ========================================

// Global variables to demonstrate scope
let globalCounter = 0;
const appName = "Dynamic Web Experience";

// Function with parameters and return value
function calculateSum(a, b) {
    // Local variable - demonstrates local scope
    const result = a + b;
    const operation = "addition";
    
    console.log(`Performing ${operation} on ${a} and ${b}`);
    return result;
}

// Function demonstrating different parameter types and return values
function formatMessage(name, age, isActive = true) {
    // Local scope variables
    const status = isActive ? "active" : "inactive";
    const message = `Hello ${name}, you are ${age} years old and ${status}.`;
    
    return {
        message: message,
        timestamp: new Date().toLocaleTimeString(),
        user: name
    };
}

// Function demonstrating scope chain
function demonstrateScope() {
    // Local variable
    let localCounter = 10;
    
    // Inner function accessing outer scope
    function innerFunction() {
        globalCounter++; // Accessing global scope
        localCounter += 5; // Accessing outer function scope
        
        return `Global: ${globalCounter}, Local: ${localCounter}, App: ${appName}`;
    }
    
    const result = innerFunction();
    document.getElementById('scopeResult').textContent = result;
    
    return result;
}

// Function with calculation logic
function performCalculation() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    // Use function with parameters and return value
    const sum = calculateSum(num1, num2);
    const product = multiplyNumbers(num1, num2);
    const average = calculateAverage([num1, num2]);
    
    // Display results
    const resultText = `Sum: ${sum}, Product: ${product}, Average: ${average.toFixed(2)}`;
    document.getElementById('calcResult').textContent = resultText;
    
    return { sum, product, average };
}

// Helper function demonstrating array parameter
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Function with default parameters
function multiplyNumbers(x = 1, y = 1) {
    return x * y;
}

// Function returning random color
function generateRandomColor() {
    // Local function to generate random RGB values
    function randomRGB() {
        return Math.floor(Math.random() * 256);
    }
    
    const red = randomRGB();
    const green = randomRGB();
    const blue = randomRGB();
    const color = `rgb(${red}, ${green}, ${blue})`;
    
    // Apply color to element
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;
    
    return color;
}

// ========================================
// PART 3: Combining CSS Animations with JavaScript
// ========================================

// Function to trigger CSS animations dynamically
function animateBox() {
    const box = document.getElementById('animatedBox');
    const animations = ['bounce', 'spin', 'shake'];
    
    // Remove existing animation classes
    animations.forEach(anim => box.classList.remove(anim));
    
    // Add random animation class
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    
    // Use setTimeout to ensure class removal is processed
    setTimeout(() => {
        box.classList.add(randomAnimation);
        box.textContent = `${randomAnimation.toUpperCase()}!`;
        
        // Remove animation class after animation completes
        setTimeout(() => {
            box.classList.remove(randomAnimation);
            box.textContent = 'Click to Animate!';
        }, 1000);
    }, 10);
}

// Card flip animation controller
let isCardFlipped = false;

function flipCard() {
    const card = document.getElementById('card');
    
    if (isCardFlipped) {
        card.classList.remove('flipped');
        isCardFlipped = false;
    } else {
        card.classList.add('flipped');
        isCardFlipped = true;
    }
    
    return isCardFlipped;
}

// Modal animation functions
function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Loader animation toggle
let isLoaderActive = false;

function toggleLoader() {
    const loader = document.getElementById('loader');
    
    if (isLoaderActive) {
        loader.classList.remove('active');
        isLoaderActive = false;
        
        // Simulate loading completion after 3 seconds
        setTimeout(() => {
            showNotification('Loading completed!', 'success');
        }, 500);
    } else {
        loader.classList.add('active');
        isLoaderActive = true;
        
        showNotification('Loading started...', 'info');
    }
    
    return isLoaderActive;
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        border-radius: 5px;
        z-index: 1001;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Advanced animation function with callback
function animateElement(element, animationClass, duration = 1000, callback) {
    // Add animation class
    element.classList.add(animationClass);
    
    // Remove class and execute callback after duration
    setTimeout(() => {
        element.classList.remove(animationClass);
        if (typeof callback === 'function') {
            callback();
        }
    }, duration);
}

// ========================================
// Event Listeners and Initialization
// ========================================

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log(`${appName} loaded successfully!`);
    console.log('Demonstrating scope, parameters, and return values');
    
    // Add keyboard event for modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hideModal();
        }
    });
    
    // Add click outside modal to close
    document.getElementById('modal').addEventListener('click', function(event) {
        if (event.target === this) {
            hideModal();
        }
    });
    
    // Initialize with random color
    generateRandomColor();
    
    // Demonstrate function with return value
    const initialCalc = performCalculation();
    console.log('Initial calculation result:', initialCalc);
});

// Function to demonstrate chaining and composition
function createAnimationSequence(elementId, animations, interval = 1500) {
    const element = document.getElementById(elementId);
    let currentIndex = 0;
    
    function playNextAnimation() {
        if (currentIndex < animations.length) {
            const animation = animations[currentIndex];
            animateElement(element, animation, 1000, () => {
                currentIndex++;
                setTimeout(playNextAnimation, interval);
            });
        }
    }
    
    playNextAnimation();
    return `Started animation sequence for ${elementId}`;
}

// Export functions for potential module use (demonstration of modern JS)
window.AnimationController = {
    animateBox,
    flipCard,
    showModal,
    hideModal,
    toggleLoader,
    createAnimationSequence
};

console.log('Animation Controller initialized:', window.AnimationController);
