import {Color} from "./enums/color";
import {Game} from "./game";

describe('Game', () => {

  let game: Game;

  beforeEach(() => {
    game = new Game('player1', 'player2');
  });

  it('should create an instance', () => {
    expect(game).toBeTruthy();
    expect(game.turn).toBeUndefined();
    expect(game.started).toBeFalse();
  });

  it('should start a game; white\'s turn', () => {
    game.start();
    expect(game).toBeTruthy();
    expect(game.turn?.color).toEqual(Color.White);
    expect(game.started).toBeTrue();
  });

  it('should end turn; black\'s turn', () => {
    game.start();
    game.endTurn();
    expect(game).toBeTruthy();
    expect(game.turn?.color).toEqual(Color.Black);
    expect(game.started).toBeTrue();
  });

  it('should second white\'s turn', () => {
    game.start();
    game.endTurn();
    game.endTurn();
    expect(game).toBeTruthy();
    expect(game.turn?.color).toEqual(Color.White);
    expect(game.started).toBeTrue();
  });

});
