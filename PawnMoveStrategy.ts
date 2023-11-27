import MoveStrategy from './MoveStrategy';
import Position from './Position';
import validCoordinates from './validCoordinates';
import Piece from './piece';

class PawnMoveStrategy implements MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var accessibleSquares: Position[] = []
        var verticallyNextSquare = new Position(initialPosition.x, initialPosition.y+1)
        var verticallyNextToNextSquare = new Position(initialPosition.x, initialPosition.y+2)
        var diagonallyRightSquare = new Position(initialPosition.x+1, initialPosition.y+1)
        var diagonallyLeftSquare = new Position(initialPosition.x-1, initialPosition.y+1)
        if(validCoordinates(verticallyNextSquare) && board[verticallyNextSquare.x][verticallyNextSquare.y]==null){
            accessibleSquares.push(verticallyNextSquare)
        }
        var secondRankYCoordinate = 1
        if(initialPosition.y==secondRankYCoordinate && validCoordinates(verticallyNextToNextSquare) && board[verticallyNextToNextSquare.x][verticallyNextToNextSquare.y]==null){
            accessibleSquares.push(verticallyNextToNextSquare)
        }
        if(validCoordinates(diagonallyRightSquare) && board[diagonallyRightSquare.x][diagonallyRightSquare.y]?.getColor()!=piece.getColor()){
            accessibleSquares.push(diagonallyRightSquare)
        }
        if(validCoordinates(diagonallyLeftSquare) && board[diagonallyLeftSquare.x][diagonallyLeftSquare.y]?.getColor()!=piece.getColor()){
            accessibleSquares.push(diagonallyLeftSquare)
        }
        return accessibleSquares
    }
}