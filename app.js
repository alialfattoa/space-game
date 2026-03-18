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
      const MONSTER_TOTAL = 7;
      const MONSTER_ROWS = 5;
      const ENEMY_SIZE = 65;
      const START_X = (canvas.width - (MONSTER_TOTAL * ENEMY_SIZE)) / 2;
      for (let row = 0; row < MONSTER_ROWS; row++) {
        for (let col = 0; col < MONSTER_TOTAL; col++) {
          const x = START_X + col * ENEMY_SIZE;
          const y = 60 + row * ENEMY_SIZE;
          ctx.drawImage(enemyImg, x, y, ENEMY_SIZE, ENEMY_SIZE);
        }
      }
    }

window.onload = async () => {
  canvas = document.getElementById('myCanvas')
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