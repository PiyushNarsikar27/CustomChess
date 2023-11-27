import MoveStrategy from './MoveStrategy';
import Position from './Position';
import validCoordinates from './validCoordinates';
import Piece from './piece';

class BishopMoveStrategy implements MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, alivePieceList: Piece[], board: (Piece | null)[][]): Position[]{
        var topRightAccessibleSquares = this.getTopRightAccessibleSquares(piece, initialPosition, board)
        var topLeftAccessibleSquares = this.getTopLeftAccessibleSquares(piece, initialPosition, board)
        var bottomRightAccessibleSquares = this.getBottomRightAccessibleSquares(piece, initialPosition, board)
        var bottomLeftAccessibleSquares = this.getBottomLefttAccessibleSquares(piece, initialPosition, board)
        var accessibleSquares: Position[] = [...topRightAccessibleSquares, ...topLeftAccessibleSquares, ...bottomRightAccessibleSquares, ...bottomLeftAccessibleSquares]
        return accessibleSquares
    }

    private getTopRightAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var currentX = initialPosition.x+1
        var currentY = initialPosition.y+1
        var squareToAccess = new Position(currentX, currentY)
        var topRightAccessibleSquares: Position[] = []
        while(validCoordinates(squareToAccess)){
            if(board[currentX][currentY]==null){
                topRightAccessibleSquares.push(squareToAccess)
            } else{
                if(board[initialPosition.x][currentY]?.getColor()!=piece.getColor()){
                    topRightAccessibleSquares.push(squareToAccess)
                }
                break
            }
            currentX++
            currentY++
        }
        return topRightAccessibleSquares
    }

    private getTopLeftAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var currentX = initialPosition.x-1
        var currentY = initialPosition.y+1
        var squareToAccess = new Position(currentX, currentY)
        var topLeftAccessibleSquares: Position[] = []
        while(validCoordinates(squareToAccess)){
            if(board[currentX][currentY]==null){
                topLeftAccessibleSquares.push(squareToAccess)
            } else{
                if(board[initialPosition.x][currentY]?.getColor()!=piece.getColor()){
                    topLeftAccessibleSquares.push(squareToAccess)
                }
                break
            }
            currentX--
            currentY++
        }
        return topLeftAccessibleSquares
    }

    private getBottomRightAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var currentX = initialPosition.x+1
        var currentY = initialPosition.y-1
        var squareToAccess = new Position(currentX, currentY)
        var bottomRightAccessibleSquares: Position[] = []
        while(validCoordinates(squareToAccess)){
            if(board[currentX][currentY]==null){
                bottomRightAccessibleSquares.push(squareToAccess)
            } else{
                if(board[initialPosition.x][currentY]?.getColor()!=piece.getColor()){
                    bottomRightAccessibleSquares.push(squareToAccess)
                }
                break
            }
            currentX++
            currentY--
        }
        return bottomRightAccessibleSquares
    }

    private getBottomLefttAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var currentX = initialPosition.x-1
        var currentY = initialPosition.y-1
        var squareToAccess = new Position(currentX, currentY)
        var bottomLeftAccessibleSquares: Position[] = []
        while(validCoordinates(squareToAccess)){
            if(board[currentX][currentY]==null){
                bottomLeftAccessibleSquares.push(squareToAccess)
            } else{
                if(board[initialPosition.x][currentY]?.getColor()!=piece.getColor()){
                    bottomLeftAccessibleSquares.push(squareToAccess)
                }
                break
            }
            currentX--
            currentY--
        }
        return bottomLeftAccessibleSquares
    }
}