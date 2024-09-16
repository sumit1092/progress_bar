const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.cirlce');
const lines = document.querySelectorAll('.line');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length; 
    }
    console.log("currentActive", currentActive, "and length", circles.length)

    update();
});

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    console.log("currentActive", currentActive)

    update();
});

function update() {
    // Update circles
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Update lines
    lines.forEach((line, idx) => {
        if (idx < currentActive - 1) {
            line.classList.add('active');
        } else {
            line.classList.remove('active');
        }
    });

    // Update navigation buttons
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === 5) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
update();

