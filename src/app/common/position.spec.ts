import { Position } from './position';

describe('Position', () => {
  it('should create an instance', () => {
    expect(new Position(1, 2)).toBeTruthy();
    expect(new Position(0, 0)).toBeTruthy();
    expect(new Position(7, 7)).toBeTruthy();
  });

  it('should throw an error', () => {
    expect( function () { new Position(-1, 2) }).toThrow(new Error('Invalid parameters for position!'));
    expect( function () { new Position(1, 8) }).toThrow(new Error('Invalid parameters for position!'));
    expect( function () { new Position(8, 8) }).toThrow(new Error('Invalid parameters for position!'));
  });

  it('should return A1', () => {
    let position = new Position(0, 0);
    let tileName = position.getTileName();
    expect(tileName).toEqual('A1');
  });

  it('should return H8', () => {
    let position = new Position(7, 7);
    let tileName = position.getTileName();
    expect(tileName).toEqual('H8');
  });

  it('should remain unchanged', () => {
    let position = new Position(1, 2);
    position.y = -1;
    position.x = 8;
    expect(position.x).toEqual(1);
    expect(position.y).toEqual(2);

    position.y = 8;
    position.x = -1;
    expect(position.x).toEqual(1);
    expect(position.y).toEqual(2);
  })

  it('should change', () => {
    let position = new Position(1, 2);
    position.y = 7;
    position.x = 7;
    expect(position.x).toEqual(7);
    expect(position.y).toEqual(7);

    position.y = 0;
    position.x = 0;
    expect(position.x).toEqual(0);
    expect(position.y).toEqual(0);
  })
});
