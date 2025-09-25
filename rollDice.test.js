const rollDice = require('./rollDice');


test("rollDice returns number between 1 and 6 for D6", () => {
  const result = rollDice(6);
  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(6);
});

test("throws error on invalid faces", () => {
  expect(() => rollDice(-1)).toThrow();
  expect(() => rollDice(1)).toThrow();
  expect(() => rollDice("six")).toThrow();
});
