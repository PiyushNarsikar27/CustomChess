import Color from "./Color";
import Position from "./Position";
import gameState from "./gameState";
import isMoveLegal from "./isMoveLegal";

export default function makeMove(initialPosition: Position, intendedPosition: Position){
    //playerToMoveIsMovingCheck()
    //iPFPValidation()
    //pieceColorCheck()
    if(isMoveLegal(initialPosition, intendedPosition)){
        var pieceToCapture = gameState.board[intendedPosition.x][intendedPosition.y]
        gameState.board[intendedPosition.x][intendedPosition.y]=gameState.board[initialPosition.x][initialPosition.y]
        gameState.board[initialPosition.x][initialPosition.y]=null
        if(pieceToCapture!=null){
            gameState.alivePiecesList=gameState.alivePiecesList.filter(piece => {
                piece!=pieceToCapture
            })
        }
        if(gameState.turn==Color.black){
            gameState.turn = Color.white
        }
        else{
            gameState.turn = Color.black
        }
    }
}