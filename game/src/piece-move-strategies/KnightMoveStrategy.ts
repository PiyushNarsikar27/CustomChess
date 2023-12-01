import MoveStrategy from './MoveStrategy';
import Position from '../types/Position'
import validCoordinates from '../utils/validCoordinates';
import Piece from '../types/Piece';

export default class KnightMoveStrategy implements MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        const accessibleSquares: Position[] = []
        // refactor below assignments
        const twoUpOneRightSquare = new Position(initialPosition.x+1, initialPosition.y+2)
        const twoUpOneLeftSquare = new Position(initialPosition.x-1, initialPosition.y+2)
        const twoLeftOneUpSquare = new Position(initialPosition.x-2, initialPosition.y+1)
        const twoRightOneUpSquare = new Position(initialPosition.x+2, initialPosition.y+1)
        const twoDownOneRightSquare = new Position(initialPosition.x+1, initialPosition.y-2)
        const twoDownOneLeftSquare = new Position(initialPosition.x-1, initialPosition.y-2)
        const twoLeftOneDownSquare = new Position(initialPosition.x-2, initialPosition.y-1)
        const twoRightOneDownSquare = new Position(initialPosition.x+2, initialPosition.y-1)
        const listOfPossibleSquares = [twoUpOneRightSquare, twoUpOneLeftSquare, twoLeftOneUpSquare, twoRightOneUpSquare, twoDownOneRightSquare,
            twoDownOneLeftSquare, twoLeftOneDownSquare, twoRightOneDownSquare]
        listOfPossibleSquares.forEach(possibleSquare => {
            if(validCoordinates(possibleSquare) && board[possibleSquare.x][possibleSquare.y]?.getColor()!=piece.getColor()){
                accessibleSquares.push(possibleSquare)
            }
        })
        return accessibleSquares
    }
}