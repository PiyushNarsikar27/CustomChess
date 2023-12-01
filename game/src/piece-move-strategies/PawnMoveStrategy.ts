import MoveStrategy from './MoveStrategy';
import Position from '../types/Position';
import validCoordinates from '../utils/validCoordinates';
import Piece from '../types/Piece';
import Color from '../types/Color';

export default class PawnMoveStrategy implements MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        const accessibleSquares: Position[] = []
        let nextSquareY: number
        let nextToNextSquareY: number
        let initialSquareY: number
        if(piece.getColor()==Color.white){
            nextSquareY = initialPosition.y+1
            nextToNextSquareY = initialPosition.y+2
            initialSquareY = 1
        } else{
            nextSquareY = initialPosition.y-1
            nextToNextSquareY = initialPosition.y-2
            initialSquareY = 6
        }
        const verticallyNextSquare = new Position(initialPosition.x, nextSquareY)
        const verticallyNextToNextSquare = new Position(initialPosition.x, nextToNextSquareY)
        const diagonallyRightSquare = new Position(initialPosition.x+1, nextSquareY)
        const diagonallyLeftSquare = new Position(initialPosition.x-1, nextSquareY)
        if(validCoordinates(verticallyNextSquare) && board[verticallyNextSquare.x][verticallyNextSquare.y]==null){
            accessibleSquares.push(verticallyNextSquare)
        }
        if(initialPosition.y==initialSquareY && validCoordinates(verticallyNextToNextSquare) && board[verticallyNextToNextSquare.x][verticallyNextToNextSquare.y]==null){
            accessibleSquares.push(verticallyNextToNextSquare)
        }
        if(validCoordinates(diagonallyRightSquare) && board[diagonallyRightSquare.x][diagonallyRightSquare.y]!=null &&
        board[diagonallyRightSquare.x][diagonallyRightSquare.y]!.getColor()!=piece.getColor()){
            accessibleSquares.push(diagonallyRightSquare)
        }
        if(validCoordinates(diagonallyLeftSquare) && board[diagonallyLeftSquare.x][diagonallyLeftSquare.y]!=null
        && board[diagonallyLeftSquare.x][diagonallyLeftSquare.y]!.getColor()!=piece.getColor()){
            accessibleSquares.push(diagonallyLeftSquare)
        }
        return accessibleSquares
    }
}