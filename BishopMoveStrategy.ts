import MoveStrategy from './MoveStrategy';
import Position from './Position';
import validCoordinates from './validCoordinates';
import Piece from './piece';

export default class BishopMoveStrategy implements MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        const topRightAccessibleSquares = this.getTopRightAccessibleSquares(piece, initialPosition, board)
        const topLeftAccessibleSquares = this.getTopLeftAccessibleSquares(piece, initialPosition, board)
        const bottomRightAccessibleSquares = this.getBottomRightAccessibleSquares(piece, initialPosition, board)
        const bottomLeftAccessibleSquares = this.getBottomLefttAccessibleSquares(piece, initialPosition, board)
        const accessibleSquares: Position[] = [...topRightAccessibleSquares, ...topLeftAccessibleSquares, ...bottomRightAccessibleSquares, ...bottomLeftAccessibleSquares]
        return accessibleSquares
    }

    private getTopRightAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        let currentX = initialPosition.x+1
        let currentY = initialPosition.y+1
        var squareToAccess = new Position(currentX, currentY)
        const topRightAccessibleSquares: Position[] = []
        while(validCoordinates(squareToAccess)){
            if(board[currentX][currentY]==null){
                topRightAccessibleSquares.push(squareToAccess)
            } else{
                if(board[currentX][currentY]?.getColor()!=piece.getColor()){
                    topRightAccessibleSquares.push(squareToAccess)
                }
                break
            }
            currentX++
            currentY++
            squareToAccess=new Position(currentX, currentY)
        }
        return topRightAccessibleSquares
    }

    private getTopLeftAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        let currentX = initialPosition.x-1
        let currentY = initialPosition.y+1
        var squareToAccess = new Position(currentX, currentY)
        const topLeftAccessibleSquares: Position[] = []
        while(validCoordinates(squareToAccess)){
            if(board[currentX][currentY]==null){
                topLeftAccessibleSquares.push(squareToAccess)
            } else{
                if(board[currentX][currentY]?.getColor()!=piece.getColor()){
                    topLeftAccessibleSquares.push(squareToAccess)
                }
                break
            }
            currentX--
            currentY++
            squareToAccess = new Position(currentX, currentY)
        }
        return topLeftAccessibleSquares
    }

    private getBottomRightAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        let currentX = initialPosition.x+1
        let currentY = initialPosition.y-1
        var squareToAccess = new Position(currentX, currentY)
        const bottomRightAccessibleSquares: Position[] = []
        while(validCoordinates(squareToAccess)){
            if(board[currentX][currentY]==null){
                bottomRightAccessibleSquares.push(squareToAccess)
            } else{
                if(board[currentX][currentY]?.getColor()!=piece.getColor()){
                    bottomRightAccessibleSquares.push(squareToAccess)
                }
                break
            }
            currentX++
            currentY--
            squareToAccess = new Position(currentX, currentY)
        }
        return bottomRightAccessibleSquares
    }

    private getBottomLefttAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        let currentX = initialPosition.x-1
        let currentY = initialPosition.y-1
        var squareToAccess = new Position(currentX, currentY)
        const bottomLeftAccessibleSquares: Position[] = []
        while(validCoordinates(squareToAccess)){
            if(board[currentX][currentY]==null){
                bottomLeftAccessibleSquares.push(squareToAccess)
            } else{
                if(board[currentX][currentY]?.getColor()!=piece.getColor()){
                    bottomLeftAccessibleSquares.push(squareToAccess)
                }
                break
            }
            currentX--
            currentY--
            squareToAccess = new Position(currentX, currentY)
        }
        return bottomLeftAccessibleSquares
    }
}
