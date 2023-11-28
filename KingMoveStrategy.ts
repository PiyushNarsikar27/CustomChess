import MoveStrategy from './MoveStrategy';
import Position from './Position';
import validCoordinates from './validCoordinates';
import Piece from './piece';

export default class KingMoveStrategy implements MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        const accessibleSquares: Position[] = []
        // refactor below assignments
        const topSquare = new Position(initialPosition.x, initialPosition.y+1)
        const topRightSquare = new Position(initialPosition.x+1, initialPosition.y+1)
        const rightSquare = new Position(initialPosition.x+1, initialPosition.y)
        const bottomRightSquare = new Position(initialPosition.x+1, initialPosition.y-1)
        const bottomSquare = new Position(initialPosition.x, initialPosition.y-1)
        const bottomLeftSquare = new Position(initialPosition.x-1, initialPosition.y-1)
        const leftSquare = new Position(initialPosition.x-1, initialPosition.y)
        const topLeftSquare = new Position(initialPosition.x-1, initialPosition.y+1)
        const listOfPossibleSquares = [topSquare, topRightSquare, rightSquare, bottomRightSquare, bottomSquare,
            bottomLeftSquare, leftSquare, topLeftSquare]
        listOfPossibleSquares.forEach(possibleSquare => {
            if(validCoordinates(possibleSquare) && board[possibleSquare.x][possibleSquare.y]?.getColor()!=piece.getColor()){
                accessibleSquares.push(possibleSquare)
            }
        })
        return accessibleSquares
    }
}