import {Color} from "./enums/color";
import {FigureNames} from "./enums/figureNames";

export interface Figure {
  color: Color;
  eaten: boolean;
  name: FigureNames;
  x: number;
  y: number;
}
