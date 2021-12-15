export class Position {
  // coordinates are 0-indexed
  // (0,0) = A1
  private _x: number;
  private _y: number;

  constructor(positionX: number, positionY: number) {
    if(positionY >= 0 && positionY <= 7 && positionX >= 0 && positionX <= 7) {
      this._y = positionY;
      this._x = positionX;
    }
    else {
      throw new Error('Invalid parameters for position!');
    }
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    if (value >= 0 && value <= 7)
      this._y = value;
  }
  get x(): number {
    return this._x;
  }

  set x(value: number) {
    if (value >= 0 && value <= 7)
      this._x = value;
  }

  getTileName(): string {
    let letter = ''
    let num = this._x;
    while (num >= 0) {
      letter = 'ABCDEFGH'[num % 26] + letter
      num = Math.floor(num / 26) - 1
    }
    return letter + (this._y + 1);
  }
}
