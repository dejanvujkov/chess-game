import {Player} from "./player";
import {Color} from "./enums/color";

export class Game {
  public player1: Player;
  public player2: Player;
  public turn?: Player; // which player is on the move
  public started: boolean;

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(Color.White, player1Name);
    this.player2 = new Player(Color.Black, player2Name);
    this.turn = undefined;
    this.started = false;
  }

  start(): void {
    this.started = true;
    this.turn = this.player1.color === Color.White ? this.player1 : this.player2;
  }

  endTurn(): void {
    this.turn = this.player1 === this.turn ? this.player2 : this.player1;
  }
}
