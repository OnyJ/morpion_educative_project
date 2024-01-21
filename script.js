const prompt = require("prompt-sync")();

class Morpion {
  constructor() {
    this.player1 = "X";
    this.player2 = "O";
    this.cells = ["", "", "", "", "", "", "", "", ""];
  }

  showBoard() {
    for (let i = 0; i < 9; i += 3) {
      console.log(
        ` ${this.cells[i]} | ${this.cells[i + 1]} | ${
          this.cells[i + 2]
        } `
      );
      if (i < 6) {
        console.log("---|---|---");
      }
    }
  }

  play(player) {
    console.clear();
    console.log("Joueur " + player + " joue.");
    this.showBoard();

    const choice = prompt("Choisis une case (entre 1 et 9)");
    const numberIsValid = Number(choice) > 0 && Number(choice) < 10;
    const cellIsEmpty = this.cells[Number(choice) - 1] === "";

    if (numberIsValid && cellIsEmpty) {
      this.cells[Number(choice) - 1] = player;
    } else {
      console.log("Nan, rejoue.");
      this.play(player);
    }

    this.showBoard();
  }

  checkVictory() {}

  gameLoop() {
    this.play(this.player1);
    this.checkVictory();
    this.play(this.player2);
    this.checkVictory();
  }
}

const m = new Morpion();
m.gameLoop();
