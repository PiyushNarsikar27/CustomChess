import Position from "./Position";
import checkIfKingIsInCheck from "./checkIfKingIsInCheck";
import gameState from "./gameState";
import isMoveLegal from "./isMoveLegal";

export default function isGameOver(){
    const defaultPosition = new Position(0,0)
    var isKingInCheck = checkIfKingIsInCheck(gameState.board, gameState.alivePiecesList, defaultPosition, defaultPosition)
    var isLegalMoveAvailable = false
    for(var pieceIndex=0;pieceIndex<gameState.alivePiecesList.length;pieceIndex++){
        if(gameState.alivePiecesList[pieceIndex].getColor()==gameState.turn){
            var squaresAccessibleToOwnsPiece = gameState.alivePiecesList[pieceIndex].getAccessibleSquares(gameState.board)
            for(var squareIndex=0;squareIndex<squaresAccessibleToOwnsPiece.length;squareIndex++){
                if(isMoveLegal(gameState.alivePiecesList[pieceIndex].getPosition(), squaresAccessibleToOwnsPiece[squareIndex])){
                    isLegalMoveAvailable = true
                    break
                }
            }
        }
    }
    if(!isLegalMoveAvailable){
        if(isKingInCheck){
            gameState.isCheckmate = true
        }
        else{
            gameState.isStalemate = true
        }
        return true
    }
    return false
}