// Game Variables
let plane = document.getElementById('plane');
let gameContainer = document.getElementById('game-container');
let planeY = 225; // Initial plane position
let planeSpeed = 5; // Speed of the plane's movement
let gameInterval;
let score = 0; // Score variable

// Function to start the game
function startGame() {
  document.querySelector('.hero').style.display = 'none'; // Hide hero section
  document.querySelector('.game').style.display = 'block'; // Show game section
  gameInterval = setInterval(gameLoop, 20); // Start the game loop
}

// Function to move the plane up
function moveUp() {
  if (planeY > 0) {
    planeY -= planeSpeed;
    plane.style.top = planeY + 'px';
  }
}

// Function to move the plane down
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

// Simple game loop (to be extended with collision, scoring, etc.)
function gameLoop() {
  // Randomly create obstacles
  if (Math.random() < 0.05) {
    createObstacle();
  }

  // Update score (this is just for demonstration)
  score++;
  document.title = "Score: " + score; // Display score in browser title
}

// Function to create an obstacle
function createObstacle() {
  let obstacle = document.createElement('div');
  obstacle.classList.add('obstacle');
  gameContainer.appendChild(obstacle);

  // Set random position for obstacle
  obstacle.style.top = Math.random() * (gameContainer.offsetHeight - 30) + 'px';

  // Remove the obstacle when it goes out of the screen
  obstacle.addEventListener('animationiteration', function() {
    gameContainer.removeChild(obstacle);
  });
}
