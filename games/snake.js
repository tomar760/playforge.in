// Snake Game Script - A simple snake game implementation

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const canvasSize = 400;

let snake = [
    { x: 80, y: 80 },
    { x: 60, y: 80 },
    { x: 40, y: 80 }
];

let food = { x: 100, y: 100 };
let dx = gridSize;
let dy = 0;

// Event listener for controlling the snake
document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
    if (event.key === 'ArrowUp' && dy === 0) {
        dx = 0;
        dy = -gridSize;
    } else if (event.key === 'ArrowDown' && dy === 0) {
        dx = 0;
        dy = gridSize;
    } else if (event.key === 'ArrowLeft' && dx === 0) {
        dx = -gridSize;
        dy = 0;
    } else if (event.key === 'ArrowRight' && dx === 0) {
        dx = gridSize;
        dy = 0;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);

    // Move the snake
    const newHead = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(newHead);

    // Check if snake eats food
    if (newHead.x === food.x && newHead.y === food.y) {
        generateFood();
    } else {
        snake.pop();
    }

    // Check for collisions
    if (newHead.x < 0 || newHead.x >= canvasSize || newHead.y < 0 || newHead.y >= canvasSize || collision(newHead)) {
        alert('Game Over!');
        resetGame();
    }

    // Draw snake
    snake.forEach(segment => {
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });

    // Draw food
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

// Collision detection
function collision(head) {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

// Generate food at random position
function generateFood() {
    food.x = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    food.y = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
}

// Reset the game after game over
function resetGame() {
    snake = [
        { x: 80, y: 80 },
        { x: 60, y: 80 },
        { x: 40, y: 80 }
    ];
    dx = gridSize;
    dy = 0;
    food = { x: 100, y: 100 };
}

// Call the draw function every 100 milliseconds to animate the game
setInterval(draw, 100);
