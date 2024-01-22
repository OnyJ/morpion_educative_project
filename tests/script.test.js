const Morpion = require("../script");

describe("showBoard", () => {
  test("displays game board correctly", () => {
    const m = new Morpion();
    m.cells = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

    console.log = jest.fn();

    m.showBoard();

    expect(console.log).toHaveBeenCalledWith(" X | O | X ");
    expect(console.log).toHaveBeenCalledWith("---|---|---");
    expect(console.log).toHaveBeenCalledWith(" O | X | O ");
    expect(console.log).toHaveBeenCalledWith("---|---|---");
    expect(console.log).toHaveBeenCalledWith(" X | O | X ");
  });
});

describe("entering horizontal winning combinations creates a victory", () => {
  test("when first line wins", () => {
    const m = new Morpion();
    m.cells = ["X", "X", "X", "O", "X", "O", "X", "O", "X"];
    console.log = jest.fn();
    m.checkVictory("X");
    expect(console.log).toHaveBeenCalledWith("Joueur X gagne !");
  });

  test("when second line wins", () => {
    const m = new Morpion();
    m.cells = ["O", "X", "O", "X", "X", "X", "X", "O", "X"];
    console.log = jest.fn();
    m.checkVictory("X");
    expect(console.log).toHaveBeenCalledWith("Joueur X gagne !");
  });

  test("when third line wins", () => {
    const m = new Morpion();
    m.cells = ["O", "X", "O", "X", "O", "X", "X", "X", "X"];
    console.log = jest.fn();
    m.checkVictory("X");
    expect(console.log).toHaveBeenCalledWith("Joueur X gagne !");
  });
});

describe("entering vertical winning combinations creates a victory", () => {
  // Remplissez ici
});

describe("entering diagonal winning combinations creates a victory", () => {
  // En bonus !
});
