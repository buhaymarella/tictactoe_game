const container = document.getElementById('shape__animation-container');
const shapeCount = 2; // Number of shapes

function createRandomShape(index) {
    const shape = document.getElementById(`shape__${index}`);

  // Calculate random position and size
    const randomPosition = getRandomPosition(container.clientHeight);
    const randomSize = getRandomSize(150, 10);

  // Set shape position and size
    shape.style.top = `${randomPosition}px`;
    shape.style.left = `${randomPosition}px`;
    shape.style.width = `${randomSize}px`;
    shape.style.height = shape.style.width;
    shape.style.setProperty('--size', shape.style.width);
}

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function getRandomSize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update shapes on every frame
window.requestAnimationFrame(function updateShapes() {
    for (let i = 1; i <= shapeCount; i++) {
        createRandomShape(i);
    }
    window.requestAnimationFrame(updateShapes);
});
