import {Figure} from "../common/figure";
import {Position} from "../common/position";
import {Color} from "../common/enums/color";
import {FigureNames} from "../common/enums/figureNames";

export class Pawn extends Figure {

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

    // TODO: Add detection for other figures

    let newPositionY = this.position.y + this.color;
    // pawn is already at the edge of board - no available moves
    if (newPositionY > 7 || newPositionY < 0) return returnList;

    returnList.push(new Position(this.position.x, newPositionY));
    if (!this.hasMoved) {
      returnList.push(new Position(this.position.x, this.position.y + (2 * this.color)));
    }
    return returnList;
  }
}
