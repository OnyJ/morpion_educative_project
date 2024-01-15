const Morpion = require("../script.js");

test("Hello() should console.log Youhou.", () => {
  const morpion = new Morpion();
  expect(morpion.hello()).toBe("Youhou.");
});
