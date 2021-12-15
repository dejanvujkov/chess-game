import {Pawn} from './pawn';
import {Color} from "../common/enums/color";
import {Position} from "../common/position";

describe('Pawn', () => {
  it('should create an instance', () => {
    expect(new Pawn(Color.White, new Position(1, 1))).toBeTruthy();
  });
});
