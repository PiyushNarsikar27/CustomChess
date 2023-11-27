import MoveStrategy from './MoveStrategy';
import Position from './Position';
import validCoordinates from './validCoordinates';
import Piece from './piece';

class KnightMoveStrategy implements MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var accessibleSquares: Position[] = []
        // refactor below assignments
        var twoUpOneRightSquare = new Position(initialPosition.x+1, initialPosition.y+2)
        var twoUpOneLeftSquare = new Position(initialPosition.x-1, initialPosition.y+2)
        var twoLeftOneUpSquare = new Position(initialPosition.x-2, initialPosition.y+1)
        var twoRightOneUpSquare = new Position(initialPosition.x+2, initialPosition.y+1)
        var twoDownOneRightSquare = new Position(initialPosition.x+1, initialPosition.y-2)
        var twoDownOneLeftSquare = new Position(initialPosition.x-1, initialPosition.y-2)
        var twoLeftOneDownSquare = new Position(initialPosition.x-2, initialPosition.y-1)
        var twoRightOneDownSquare = new Position(initialPosition.x+2, initialPosition.y-1)
        var listOfPossibleSquares = [twoUpOneRightSquare, twoUpOneLeftSquare, twoLeftOneUpSquare, twoRightOneUpSquare, twoDownOneRightSquare,
            twoDownOneLeftSquare, twoLeftOneDownSquare, twoRightOneDownSquare]
        listOfPossibleSquares.forEach(possibleSquare => {
            if(validCoordinates(possibleSquare) && board[possibleSquare.x][possibleSquare.y]?.getColor()!=piece.getColor()){
                accessibleSquares.push(possibleSquare)
            }
        })
        return accessibleSquares
    }
}