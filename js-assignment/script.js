// ========================================
// PART 1: JavaScript Basics - Variables, Data Types, Conditionals
// ========================================

// Variables and data types
let userName = "JavaScript Learner";
const currentYear = 2025;
let isLearning = true;

// Function to check age category using conditionals
function checkAge() {
    // Get user input and convert to number
    const age = parseInt(document.getElementById('ageInput').value);
    const resultElement = document.getElementById('ageResult');
    
    // Conditional logic
    if (isNaN(age) || age < 0) {
        resultElement.textContent = "Please enter a valid age!";
        resultElement.style.color = "red";
    } else if (age < 13) {
        resultElement.textContent = "You're a child! 🧒";
        resultElement.style.color = "blue";
    } else if (age < 20) {
        resultElement.textContent = "You're a teenager! 🧑";
        resultElement.style.color = "green";
    } else if (age < 65) {
        resultElement.textContent = "You're an adult! 👨‍💼";
        resultElement.style.color = "purple";
    } else {
        resultElement.textContent = "You're a senior! 👴";
        resultElement.style.color = "orange";
    }
}

// ========================================
// PART 2: Functions - Reusable Code Blocks
// ========================================

// Function 1: Calculate sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Function 2: Format text (capitalize and add decoration)
function formatString(text) {
    if (!text) return "No text provided!";
    return `✨ ${text.toUpperCase()} ✨`;
}

// Functions called by buttons
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const result = calculateSum(num1, num2);
    
    document.getElementById('calcResult').textContent = `Sum: ${result}`;
}

function formatText() {
    const text = document.getElementById('textInput').value;
    const formatted = formatString(text);
    
    document.getElementById('textResult').textContent = formatted;
}

// ========================================
// PART 3: Loops - Repetition and Iteration
// ========================================

// Loop 1: For loop to generate number list
function generateList() {
    const listElement = document.getElementById('numberList');
    listElement.innerHTML = ''; // Clear existing content
    
    // For loop to create list items
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i * 2; // Even numbers
        listElement.appendChild(listItem);
    }
}

// Loop 2: While loop for countdown
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let count = 5;
    
    // Clear any existing countdown
    countdownElement.textContent = '';
    
    const countdownInterval = setInterval(() => {
        if (count > 0) {
            countdownElement.textContent = `Countdown: ${count}`;
            count--;
        } else {
            countdownElement.textContent = "🚀 Blast off!";
            clearInterval(countdownInterval);
        }
    }, 1000);
}

// ========================================
// PART 4: DOM Manipulation - Making Pages Interactive
// ========================================

// DOM Interaction 1: Toggle theme (event listener)
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            toggleBtn.textContent = 'Light Theme';
        } else {
            toggleBtn.textContent = 'Dark Theme';
        }
    });
});

// DOM Interaction 2: Add new elements dynamically
function addElement() {
    const container = document.getElementById('dynamicContent');
    const newElement = document.createElement('div');
    
    // Create random content
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    newElement.style.background = randomColor;
    newElement.style.padding = '1rem';
    newElement.style.margin = '0.5rem 0';
    newElement.style.borderRadius = '5px';
    newElement.style.color = 'white';
    newElement.textContent = `Dynamic Element #${container.children.length + 1}`;
    
    container.appendChild(newElement);
}

// DOM Interaction 3: Change existing content
function changeContent() {
    const header = document.querySelector('header h1');
    const messages = [
        'JavaScript is Awesome!',
        'DOM Manipulation Rocks!',
        'Functions are Powerful!',
        'Loops Save Time!',
        'JavaScript Fundamentals'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    header.textContent = randomMessage;
    
    // Add animation effect
    header.style.transform = 'scale(1.1)';
    setTimeout(() => {
        header.style.transform = 'scale(1)';
    }, 300);
}

// Initialize page
console.log('JavaScript Fundamentals Demo Loaded!');
console.log(`Welcome ${userName}! Current year: ${currentYear}`);
console.log(`Learning status: ${isLearning ? 'Active' : 'Inactive'}`);
