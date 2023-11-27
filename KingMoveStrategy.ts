import MoveStrategy from './MoveStrategy';
import Position from './Position';
import validCoordinates from './validCoordinates';
import Piece from './piece';

export class KingMoveStrategy implements MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var accessibleSquares: Position[] = []
        // refactor below assignments
        var topSquare = new Position(initialPosition.x, initialPosition.y+1)
        var topRightSquare = new Position(initialPosition.x+1, initialPosition.y+1)
        var rightSquare = new Position(initialPosition.x+1, initialPosition.y)
        var bottomRightSquare = new Position(initialPosition.x+1, initialPosition.y-1)
        var bottomSquare = new Position(initialPosition.x, initialPosition.y-1)
        var bottomLeftSquare = new Position(initialPosition.x-1, initialPosition.y-1)
        var leftSquare = new Position(initialPosition.x-1, initialPosition.y)
        var topLeftSquare = new Position(initialPosition.x-1, initialPosition.y+1)
        var listOfPossibleSquares = [topSquare, topRightSquare, rightSquare, bottomRightSquare, bottomSquare,
            bottomLeftSquare, leftSquare, topLeftSquare]
        listOfPossibleSquares.forEach(possibleSquare => {
            if(validCoordinates(possibleSquare) && board[possibleSquare.x][possibleSquare.y]?.getColor()!=piece.getColor()){
                accessibleSquares.push(possibleSquare)
            }
        })
        return accessibleSquares
    }
}