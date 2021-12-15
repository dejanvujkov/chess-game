import {Color} from "./enums/color";
import {FigureNames} from "./enums/figureNames";
import {Position} from "./position";

export interface Figure {
  color: Color;
  eaten: boolean;
  name: FigureNames;
  position: Position;

  move(positionTo: Position): void;
}
