export function rollDice(faces) {
  if (!Number.isInteger(faces) || faces <= 1) {
    throw new Error("Invalid number of faces.");
  }
  return Math.floor(Math.random() * faces) + 1;
}


