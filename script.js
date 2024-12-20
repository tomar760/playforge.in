// Game Variables
let plane = document.getElementById('plane');
let gameContainer = document.getElementById('game-container');
let planeY = 225; // Initial plane position
let planeSpeed = 5; // Speed of the plane's movement
let score = 0; // Score variable
let gameInterval;
let gameOver = false; // Game over flag
let obstacles = []; // Array to store obstacles
let crashSound = new Audio('crash.mp3'); // Crash sound effect

// Start Game
function startGame() {
  document.querySelector('.hero').style.display = 'none'; // Hide Hero Section
  document.querySelector('.game').style.display = 'block'; // Show Game Section
  gameOver = false; // Reset gameOver flag
  score = 0; // Reset score
  document.getElementById('score-board').innerText = "Score: " + score;
  gameInterval = setInterval(gameLoop, 20); // Start the game loop
}

// Move Plane Up
function moveUp() {
  if (planeY > 0) {
    planeY -= planeSpeed;
    plane.style.top = planeY + 'px';
  }
}

// Move Plane Down
function moveDown() {
  if (planeY < gameContainer.offsetHeight - plane.offsetHeight) {
    planeY += planeSpeed;
    plane.style.top = planeY + 'px';
  }
}

// Listen for keydown events to move the plane
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp') moveUp();
  if (e.key === 'ArrowDown') moveDown();
});

// Game Loop
function gameLoop() {
  if (gameOver) {
    clearInterval(gameInterval);
    displayGameOver();
    return;
  }

  // Randomly create obstacles
  if (Math.random() < 0.05) {
    createObstacle();
  }

  // Update score (for demonstration)
  score++;
  document.getElementById('score-board').innerText = "Score: " + score;

  // Check for collision with obstacles
  checkCollision();
}

// Create Obstacle
function createObstacle() {
  let obstacle = document.createElement('div');
  obstacle.classList.add('obstacle');
  gameContainer.appendChild(obstacle);

  // Set random vertical position for obstacle
  obstacle.style.top = Math.random() * (gameContainer.offsetHeight - 30) + 'px';

  // Add obstacle to the array
  obstacles.push(obstacle);

  // Remove the obstacle when it goes out of the screen
  obstacle.addEventListener('animationiteration', function() {
    gameContainer.removeChild(obstacle);
    obstacles = obstacles.filter(o => o !== obstacle); // Remove from array
  });
}

// Check for Collision
function checkCollision() {
  obstacles.forEach(obstacle => {
    let obstacleRect = obstacle.getBoundingClientRect();
    let planeRect = plane.getBoundingClientRect();

    if (
      planeRect.left < obstacleRect.right &&
      planeRect.right > obstacleRect.left &&
      planeRect.top < obstacleRect.bottom &&
      planeRect.bottom > obstacleRect.top
    ) {
      gameOver = true;
      crashSound.play(); // Play crash sound on collision
    }
  });
}

// Display Game Over Message
function displayGameOver() {
  let gameOverDiv = document.createElement('div');
  gameOverDiv.classList.add('game-over');
  gameOverDiv.innerText = "Game Over! Final Score: " + score;
  gameContainer.appendChild(gameOverDiv);
}
