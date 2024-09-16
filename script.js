const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF5', 
    '#FFDB33', '#AF33FF', '#33FFA6', '#FF7F33', '#A6FF33', 
    '#A6A633', '#33D4FF', '#FFA633', '#FF339B', '#33FF99',
    '#33FFA9', '#FFDA33', '#AFD433', '#FF57AF', '#33AFD4',
    '#FFD433', '#33FF66', '#33C7FF', '#FFB833', '#33FFA1',
    '#33FFD4', '#AF33FF', '#FF33DA', '#33FFD1', '#33DAFF',
    '#FF33D4', '#33FFCC', '#FFA833', '#33FFD9', '#33FFDA',
    '#33FFDB', '#FF333D', '#FF33F4', '#FF5739', '#FFB339',
    '#FF339F', '#FF63F3', '#FFA233', '#33FF9F', '#FF9F33',
    '#AF33FF', '#33FFAF', '#FF99AF', '#33FFD6', '#FFD39F'
];

let currentIndex = 0;

function changeColor() {
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex];
}

document.body.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.body.addEventListener('touchstart', function () {
    changeColor();
});
