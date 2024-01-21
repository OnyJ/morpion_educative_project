const Morpion = require("../script");

describe("showBoard", () => {
  test("displays game bard correctly", () => {
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
