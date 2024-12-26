const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

// Game constants
const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;
const COLORS = ['#00F0F0', '#F0F000', '#F000F0', '#F0F080', '#80F000', '#8000F0', '#F08000'];  // colors for the shapes
let score = 0;
let gameInterval;
let isGameOver = false;

// Initialize the game board
let board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

// Tetromino shapes
const TETROMINOS = [
    { shape: [[1, 1, 1], [0, 1, 0]], color: 0 }, // T shape
    { shape: [[1, 1], [1, 1]], color: 1 }, // O shape
    { shape: [[0, 1, 1], [1, 1, 0]], color: 2 }, // S shape
    { shape: [[1, 1, 0], [0, 1, 1]], color: 3 }, // Z shape
    { shape: [[1, 0, 0], [1, 1, 1]], color: 4 }, // L shape
    { shape: [[0, 0, 1], [1, 1, 1]], color: 5 }, // J shape
    { shape: [[1, 1, 1, 1]], color: 6 }, // I shape
];

let currentTetromino;
let tetrominoPosition;

// Draw the game board
function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the board
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (board[row][col] !== null) {
                ctx.fillStyle = COLORS[board[row][col]];
                ctx.fillRect(col * BLOCK_SIZE, row * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            }
        }
    }
}

// Create a new tetromino
function createTetromino() {
    const randomIndex = Math.floor(Math.random() * TETROMINOS.length);
    currentTetromino = TETROMINOS[randomIndex];
    tetrominoPosition = { x: Math.floor(COLS / 2) - 1, y: 0 };
}

// Draw the current tetromino
function drawTetromino() {
    const { shape, color } = currentTetromino;
    
    for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
            if (shape[row][col]) {
                ctx.fillStyle = COLORS[color];
                ctx.fillRect((tetrominoPosition.x + col) * BLOCK_SIZE, (tetrominoPosition.y + row) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            }
        }
    }
}

// Move the tetromino down
function moveTetrominoDown() {
    tetrominoPosition.y++;
    if (isCollision()) {
        tetrominoPosition.y--;
        placeTetromino();
        checkLines();
        if (isGameOver) {
            alert('Game Over! Final Score: ' + score);
            clearInterval(gameInterval);
        } else {
            createTetromino();
        }
    }
}

// Check for collision with the board or other blocks
function isCollision() {
    const { shape } = currentTetromino;
    
    for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
            if (shape[row][col]) {
                const x = tetrominoPosition.x + col;
                const y = tetrominoPosition.y + row;
                if (x < 0 || x >= COLS || y >= ROWS || (y >= 0 && board[y][x] !== null)) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Place the tetromino on the board
function placeTetromino() {
    const { shape, color } = currentTetromino;
    
    for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
            if (shape[row][col]) {
                board[tetrominoPosition.y + row][tetrominoPosition.x + col] = color;
            }
        }
    }
}

// Check for filled lines and clear them
function checkLines() {
    for (let row = 0; row < ROWS; row++) {
        if (board[row].every(cell => cell !== null)) {
            board.splice(row, 1);
            board.unshift(Array(COLS).fill(null));
            score += 10;
            document.getElementById('score-value').innerText = score;
        }
    }
}

// Handle keyboard input
function control(event) {
    if (isGameOver) return;

    if (event.key === 'ArrowLeft') {
        tetrominoPosition.x--;
        if (isCollision()) tetrominoPosition.x++;
    } else if (event.key === 'ArrowRight') {
        tetrominoPosition.x++;
        if (isCollision()) tetrominoPosition.x--;
    } else if (event.key === 'ArrowDown') {
        moveTetrominoDown();
    } else if (event.key === 'ArrowUp') {
        rotateTetromino();
    }
}

// Rotate the tetromino
function rotateTetromino() {
    const { shape } = currentTetromino;
    const newShape = shape[0].map((_, index) => shape.map(row => row[index])).reverse();
    const originalShape = currentTetromino.shape;
    currentTetromino.shape = newShape;

    if (isCollision()) {
        currentTetromino.shape = originalShape;
    }
}

// Start the game
function startGame() {
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    score = 0;
    document.getElementById('score-value').innerText = score;
    isGameOver = false;
    createTetromino();
    gameInterval = setInterval(() => {
        moveTetrominoDown();
        drawBoard();
        drawTetromino();
    }, 500);
}

// Reset the game
function resetGame() {
    clearInterval(gameInterval);
    startGame();
}

// Attach keydown event for controls
document.addEventListener('keydown', control);
