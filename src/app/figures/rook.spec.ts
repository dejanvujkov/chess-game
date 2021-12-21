import {Rook} from './rook';
import {Color} from "../common/enums/color";
import {Position} from "../common/position";

describe('Rook', () => {
  it('should create an instance', () => {
    expect(new Rook(Color.White, new Position(0,0))).toBeTruthy();
  });

  it('should move', () => {
    let rook = new Rook(Color.White, new Position(0,0));
    expect(rook).toBeTruthy();
    rook.move(new Position(0, 1));
    expect(rook.hasMoved).toBeTrue();
    expect(rook.position).toEqual(new Position(0, 1));
  });

  it('should not move', () => {
    let rook = new Rook(Color.White, new Position(0,0));
    expect(rook).toBeTruthy();
    rook.move(new Position(1, 1));
    expect(rook.hasMoved).toBeFalse();
    expect(rook.position).toEqual(new Position(0, 0));
  });

  it('should have 14 moves', () => {
    let rook = new Rook(Color.White, new Position(0,0));
    expect(rook).toBeTruthy();
    expect(rook.availableMoves?.length).toEqual(14);
    expect(rook.availableMoves?.some(m => m.x === 1 && m.y === 0)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 2 && m.y === 0)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 3 && m.y === 0)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 4 && m.y === 0)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 5 && m.y === 0)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 6 && m.y === 0)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 7 && m.y === 0)).toBeTrue();

    expect(rook.availableMoves?.some(m => m.x === 0 && m.y === 1)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 0 && m.y === 2)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 0 && m.y === 3)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 0 && m.y === 4)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 0 && m.y === 5)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 0 && m.y === 6)).toBeTrue();
    expect(rook.availableMoves?.some(m => m.x === 0 && m.y === 7)).toBeTrue();

    let anotherRook = new Rook(Color.Black, new Position(3, 4));
    expect(anotherRook).toBeTruthy();
    expect(anotherRook.availableMoves?.length).toEqual(14);
    expect(anotherRook.availableMoves?.some(m => m.x === 0 && m.y === 4)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 1 && m.y === 4)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 2 && m.y === 4)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 4 && m.y === 4)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 5 && m.y === 4)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 6 && m.y === 4)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 7 && m.y === 4)).toBeTrue();

    expect(anotherRook.availableMoves?.some(m => m.x === 3 && m.y === 5)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 3 && m.y === 6)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 3 && m.y === 7)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 3 && m.y === 3)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 3 && m.y === 2)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 3 && m.y === 1)).toBeTrue();
    expect(anotherRook.availableMoves?.some(m => m.x === 3 && m.y === 0)).toBeTrue();

  });
});
