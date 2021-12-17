import {Color} from "./enums/color";
import {FigureNames} from "./enums/figureNames";
import {Position} from "./position";

export abstract class Figure {
  color: Color;
  eaten: boolean;
  name: FigureNames;
  position: Position;
  hasMoved: boolean;
  availableMoves?: Position[];

  protected constructor(color: Color, name: FigureNames, position: Position) {
    this.color = color;
    this.name = name;
    this.position = position;
    this.eaten = false;
    this.hasMoved = false;
  }

  move(positionTo: Position): void {
    this.position = positionTo;
    if (!this.hasMoved) this.hasMoved = true;
    this.availableMoves = this.calculateAvailableMoves?.();
  }

  abstract calculateAvailableMoves?(): Position[];
}
