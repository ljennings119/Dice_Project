import { rollDice } from './rollDice.js';

const rollBtn = document.getElementById('rollBtn');
const diceIcon = document.getElementById('diceIcon');
const diceSelect = document.getElementById('diceSelect');
const resultDisplay = document.getElementById('diceResult');

rollBtn.addEventListener('click', () => {
  // Spin the icon
  diceIcon.classList.remove('spin'); // Remove it first to re-trigger animation
  void diceIcon.offsetWidth;         // Force reflow (restarts animation)
  diceIcon.classList.add('spin');

  // Roll the dice
  const faces = parseInt(diceSelect.value);
  const result = rollDice(faces);
  resultDisplay.textContent = result;
});

