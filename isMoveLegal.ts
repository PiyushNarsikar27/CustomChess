import Position from "./Position";
import checkIfKingIsInCheck from "./checkIfKingIsInCheck";
import gameState from "./gameState";

export default function isMoveLegal(initialPosition: Position, intendedPosition: Position): boolean{
    var piece = gameState.board[initialPosition.x][initialPosition.y]
    if(piece==null){
        return false
    }
    var intendedPositionInAccessibleSquares = false
    var accessibleSquares = piece.getAccessibleSquares(gameState.board)
    for(var accessibleSquareIndex=0;accessibleSquareIndex<accessibleSquares.length;accessibleSquareIndex++){
        if(accessibleSquares[accessibleSquareIndex].x==intendedPosition.x && accessibleSquares[accessibleSquareIndex].y==intendedPosition.y){
            intendedPositionInAccessibleSquares = true
            break
        }
    }
    if(!intendedPositionInAccessibleSquares){
        return false
    }
    return (!checkIfKingIsInCheck(gameState.board, gameState.alivePiecesList, initialPosition, intendedPosition))
}