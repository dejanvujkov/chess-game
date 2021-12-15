import {Color} from "./enums/color";
import {Figure} from "./figure";

export class Player {
  public color: Color;
  public name: string;
  public pile: Figure[]; // list of eaten figures
  public figures: Figure[]; // list of my figures

  constructor(color: Color, name: string) {
    this.color = color;
    this.name = name;
    this.pile = [];
    this.figures = this.initializeFigures(color);
  }

  public eat(figure: Figure): void {
    if (figure.color != this.color) {
      figure.eaten = true;
      this.pile.push(figure);
    }
  }

  private initializeFigures(color: Color): Figure[] {
    // TODO: initializeFigures based on color of the player
    return [];
  }
}
