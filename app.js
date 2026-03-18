const canvas = document.getElementById('myCanvas')
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;

async function loadTexture(path) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = path
    img.onload = () => {
      resolve(img)
    }
  })
}

function createEnemies(ctx, canvas, enemyImg) {
  for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
    for (let y = 0; y < 50 * 5; y += 50) {
      ctx.drawImage(enemyImg, x, y);
    }
  }
}

window.onload = async () => {
  ctx = canvas.getContext('2d')
  // Load images using loadTexture()
  const heroImg = await loadTexture('assets/player.png')
  const enemyImg = await loadTexture('assets/enemyShip.png')
  // Draw black background
  ctx.fillStyle="black";
  ctx.fillRect(0,0,canvas.width, canvas.height);
  // Draw hero
  ctx.drawImage(heroImg, canvas.width/2 - 45, canvas.height - (canvas.height / 4), 90, 90);
  // Create Enemies
  createEnemies(ctx, canvas, enemyImg);
}