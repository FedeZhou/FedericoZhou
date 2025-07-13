// Test script to verify text cycling logic
console.log('Testing text cycling logic...');

const texts = ['moving', 'growing', 'learning'];
let currentIndex = 0;

function cycleText() {
    console.log('Cycling text, current index:', currentIndex);
    
    // Just change text immediately - no animation
    currentIndex = (currentIndex + 1) % texts.length;
    const newText = `Keep ${texts[currentIndex]}`;
    console.log('Changed to:', newText);
    return newText;
}

// Test the cycling logic
console.log('Initial text: Keep moving');
console.log('Starting test cycle...');

// Simulate 10 cycles
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        const result = cycleText();
        console.log(`Cycle ${i + 1}: ${result}`);
    }, i * 1000); // Every second for testing
}

console.log('Test completed. Expected sequence:');
console.log('1. Keep growing');
console.log('2. Keep learning');
console.log('3. Keep moving');
console.log('4. Keep growing');
console.log('5. Keep learning');
console.log('... and so on'); 