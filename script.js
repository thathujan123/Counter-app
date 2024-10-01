let count = 0;

document.getElementById('decrease').addEventListener('click', () => {
    count--;
    updateDisplay();
});

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

document.getElementById('increase').addEventListener('click', () => {
    count++;
    updateDisplay();
});

function updateDisplay() {
    const countDisplay = document.getElementById('count');
    countDisplay.innerText = count;

    // Apply color based on the value
    if (count > 0) {
        countDisplay.className = 'positive';
    } else if (count < 0) {
        countDisplay.className = 'negative';
    } else {
        countDisplay.className = 'neutral';
    }
}