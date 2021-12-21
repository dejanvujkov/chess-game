import {Figure} from "../common/figure";
import {Color} from "../common/enums/color";
import {Position} from "../common/position";
import {FigureNames} from "../common/enums/figureNames";

export class Rook extends Figure {

  constructor(color: Color, position: Position) {
    super(color, FigureNames.Pawn, position);
    super.availableMoves = this.calculateAvailableMoves();
  }

  override move(positionTo: Position) {
    // this is needed later for en-passant and pawn promotion
    super.move(positionTo);
  }

  override calculateAvailableMoves(): Position[] {
    let returnList: Position[] = [];
    for (let i = 1; i <= 7; i++) {
      if (this.position.x + i <= 7) returnList.push(new Position(this.position.x + i, this.position.y));
      if (this.position.x - i >= 0) returnList.push(new Position(this.position.x - i, this.position.y));

      if (this.position.y + i <= 7) returnList.push(new Position(this.position.x, this.position.y + i));
      if (this.position.y - i >= 0) returnList.push(new Position(this.position.x, this.position.y - i));
    }
    // TODO: Add detection for other figures

    return returnList;
  }
}
