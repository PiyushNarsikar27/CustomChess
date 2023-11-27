import MoveStrategy from './MoveStrategy';
import Position from './Position';
import Piece from './piece';
import constants from './Constants';

class RookMoveStrategy implements MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var topAccessibleSquares = this.getTopAccessibleSquares(piece, initialPosition, board)
        var bottomAccessibleSquares = this.getBottomAccessibleSquares(piece, initialPosition, board)
        var rightAccessibleSquares = this.getRightAccessibleSquares(piece, initialPosition, board)
        var leftAccessibleSquares = this.getLeftAccessibleSquares(piece, initialPosition, board)
        var accessibleSquares: Position[] = [...topAccessibleSquares, ...bottomAccessibleSquares, ...rightAccessibleSquares, ...leftAccessibleSquares]
        return accessibleSquares
    }

    private getTopAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var topAccessibleSquares: Position[] = []
        for(var currentY=initialPosition.y+1;currentY<constants.boardSize;currentY++){
            if(board[initialPosition.x][currentY]==null){
                topAccessibleSquares.push(new Position(initialPosition.x, currentY))
            } else{
                if(board[initialPosition.x][currentY]?.getColor()!=piece.getColor()){
                    topAccessibleSquares.push(new Position(initialPosition.x, currentY))
                }
                break
            }
        }
        return topAccessibleSquares
    }

    private getBottomAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var bottomAccessibleSquares: Position[] = []
        for(var currentY=initialPosition.y-1;currentY>=0;currentY--){
            if(board[initialPosition.x][currentY]==null){
                bottomAccessibleSquares.push(new Position(initialPosition.x, currentY))
            } else{
                if(board[initialPosition.x][currentY]?.getColor()!=piece.getColor()){
                    bottomAccessibleSquares.push(new Position(initialPosition.x, currentY))
                }
                break
            }
        }
        return bottomAccessibleSquares
    }

    private getRightAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var rightAccessibleSquares: Position[] = []
        for(var currentX=initialPosition.x+1;currentX<constants.boardSize;currentX++){
            if(board[currentX][initialPosition.y]==null){
                rightAccessibleSquares.push(new Position(currentX, initialPosition.y))
            } else{
                if(board[currentX][initialPosition.y]?.getColor()!=piece.getColor()){
                    rightAccessibleSquares.push(new Position(currentX, initialPosition.y))
                }
                break
            }
        }
        return rightAccessibleSquares
    }

    private getLeftAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]{
        var leftAccessibleSquares: Position[] = []
        for(var currentX=initialPosition.x-1;currentX>=0;currentX--){
            if(board[currentX][initialPosition.y]==null){
                leftAccessibleSquares.push(new Position(currentX, initialPosition.y))
            } else{
                if(board[currentX][initialPosition.y]?.getColor()!=piece.getColor()){
                    leftAccessibleSquares.push(new Position(currentX, initialPosition.y))
                }
                break
            }
        }
        return leftAccessibleSquares
    }
}
