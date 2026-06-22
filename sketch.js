let palette = [];
let shapeStyle = 'circles';
let density = 60;
let recipe = '';

const palettes = {
  Sunset: ['#ffb347', '#ff6961', '#ffcc5c', '#ffeead'],
  Ocean: ['#2e86ab', '#83c5be', '#d8e9a8', '#ffcb77'],
  Forest: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261'],
};

function setup() {
  const canvas = createCanvas(480, 360);
  canvas.parent('game-area');
  noLoop();
  setRecipe();
  updateRecipeText();

  const paletteSelect = document.getElementById('paletteSelect');
  const shapeSelect = document.getElementById('shapeSelect');
  const densityRange = document.getElementById('densityRange');
  const randomRecipe = document.getElementById('randomRecipe');

  paletteSelect.addEventListener('change', () => {
    palette = palettes[paletteSelect.value];
    draw();
    updateRecipeText();
  });

  shapeSelect.addEventListener('change', () => {
    shapeStyle = shapeSelect.value;
    draw();
    updateRecipeText();
  });

  densityRange.addEventListener('input', () => {
    density = Number(densityRange.value);
    draw();
    updateRecipeText();
  });

  randomRecipe.addEventListener('click', () => {
    randomizeRecipe();
    draw();
    updateRecipeText();
  });
}

function draw() {
  background('#f7f3eb');
  palette = palette.length ? palette : palettes.Sunset;
  const steps = Math.floor(density / 10);
  const spacing = width / steps;

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      const colorIndex = floor(noise(x * 0.01, y * 0.01) * palette.length);
      fill(palette[colorIndex]);
      noStroke();
      drawShape(x + random(-spacing / 3, spacing / 3), y + random(-spacing / 3, spacing / 3), spacing * 0.7);
    }
  }
}

function drawShape(x, y, size) {
  if (shapeStyle === 'squares') {
    rectMode(CENTER);
    square(x, y, size);
  } else if (shapeStyle === 'waves') {
    push();
    translate(x, y);
    beginShape();
    for (let i = 0; i < 6; i++) {
      vertex(cos(i * TWO_PI / 5) * size * 0.5, sin(i * TWO_PI / 5) * size * 0.6 + sin(i * 1.2) * size * 0.15);
    }
    endShape(CLOSE);
    pop();
  } else {
    ellipse(x, y, size, size);
  }
}

function randomizeRecipe() {
  const paletteKeys = Object.keys(palettes);
  const shapeKeys = ['circles', 'squares', 'waves'];
  const randomPalette = random(paletteKeys);
  const randomShape = random(shapeKeys);
  const randomDensity = floor(random(30, 90));

  palette = palettes[randomPalette];
  shapeStyle = randomShape;
  density = randomDensity;

  document.getElementById('paletteSelect').value = randomPalette;
  document.getElementById('shapeSelect').value = randomShape;
  document.getElementById('densityRange').value = randomDensity;
}

function setRecipe() {
  palette = palettes.Sunset;
  shapeStyle = 'circles';
  density = 60;
}

function updateRecipeText() {
  recipe = `Palette: ${document.getElementById('paletteSelect').selectedOptions[0].textContent}\nStyle: ${document.getElementById('shapeSelect').selectedOptions[0].textContent}\nDensity: ${density}`;
  document.getElementById('recipeText').textContent = recipe;
}
