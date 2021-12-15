import {Figure} from "../common/figure";
import {Position} from "../common/position";
import {Color} from "../common/enums/color";
import {FigureNames} from "../common/enums/figureNames";

export class Pawn implements Figure {
  color: Color;
  eaten: boolean;
  name: FigureNames;
  position: Position;
  hasMoved: boolean;

  constructor(color: Color, position: Position) {
    this.color = color;
    this.position = position;
    this.eaten = false;
    this.name = FigureNames.Pawn;
    this.hasMoved = false;
  }

  move(positionTo: Position): void {
    this.position = positionTo;
  }
}
