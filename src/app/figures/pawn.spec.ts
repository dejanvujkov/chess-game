import {Pawn} from './pawn';
import {Color} from "../common/enums/color";
import {Position} from "../common/position";

describe('Pawn', () => {
  it('should create an instance', () => {
    let pawn = new Pawn(Color.White, new Position(1, 1));
    expect(pawn).toBeTruthy();
    expect(pawn.hasMoved).toBeFalse();
    expect(pawn.eaten).toBeFalse();
  });

  it('should move', () => {
    let pawn = new Pawn(Color.White, new Position(1, 1));
    expect(pawn).toBeTruthy();
    pawn.move(new Position(1, 2));
    expect(pawn.position).toEqual(new Position(1, 2));
    expect(pawn.hasMoved).toBeTrue();
  });

  it('should not move', () => {
    let pawn = new Pawn(Color.White, new Position(1, 1));
    expect(pawn).toBeTruthy();
    pawn.move(new Position(5, 5));
    expect(pawn.position).toEqual(new Position(1, 1));
    expect(pawn.hasMoved).toBeFalse();
  });

  it('should have 2 moves', () => {
    let whitePawn = new Pawn(Color.White, new Position(0, 1));
    expect(whitePawn.availableMoves).toBeDefined();
    expect(whitePawn.availableMoves?.length).toEqual(2);
    expect(whitePawn.availableMoves?.includes(new Position(0, 2)));
    expect(whitePawn.availableMoves?.includes(new Position(0, 3)));

    let blackPawn = new Pawn(Color.Black, new Position(0, 6));
    expect(blackPawn.availableMoves).toBeDefined();
    expect(blackPawn.availableMoves?.length).toEqual(2);
    expect(blackPawn.availableMoves?.includes(new Position(0, 5)));
    expect(blackPawn.availableMoves?.includes(new Position(0, 4)));
  });

  it('should have 1 move', () => {
    let whitePawn = new Pawn(Color.White, new Position(0, 1));
    whitePawn.move(new Position(0, 2));
    expect(whitePawn.availableMoves).toBeDefined();
    expect(whitePawn.availableMoves?.length).toEqual(1);
    expect(whitePawn.availableMoves?.includes(new Position(0, 3)));

    let blackPawn = new Pawn(Color.Black, new Position(0, 6));
    blackPawn.move(new Position(0, 4));
    expect(blackPawn.availableMoves).toBeDefined();
    expect(blackPawn.availableMoves?.length).toEqual(1);
    expect(blackPawn.availableMoves?.includes(new Position(0, 3)));
  });

  it('should have 0 moves', () => {
    let whitePawn = new Pawn(Color.White, new Position(0, 7));
    expect(whitePawn.availableMoves).toBeDefined();
    expect(whitePawn.availableMoves?.length).toEqual(0);

    let blackPawn = new Pawn(Color.Black, new Position(0, 0));
    expect(blackPawn.availableMoves).toBeDefined();
    expect(blackPawn.availableMoves?.length).toEqual(0);
  });
});
