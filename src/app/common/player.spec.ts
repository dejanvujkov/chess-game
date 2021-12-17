import {Player} from "./player";
import {Color} from "./enums/color";
import {Position} from "./position";
import {Pawn} from "../figures/pawn";

describe('Player', () => {
  it('should create an instance', () => {
    let player = new Player(Color.White, "player");
    expect(player).toBeTruthy();
    expect(player.pile).toEqual([]);
    expect(player.figures).toEqual([]);
  });

  it('should eat work', () => {
    let player = new Player(Color.White, "player");
    expect(player).toBeTruthy();
    let figure = new Pawn(Color.Black, new Position(6, 0));
    player.eat(figure);
    expect(figure.eaten).toBeTrue();
    expect(player.pile).toContain(figure);
  });

  it('should not eat figure with same color', () => {
    let player = new Player(Color.White, "player");
    expect(player).toBeTruthy();
    let figure = new Pawn(Color.White, new Position(1, 0));
    player.eat(figure);
    expect(figure.eaten).toBeFalse();
    expect(player.pile).toEqual([]);
  });

});
