import Color from "../types/Color";
import Game from "../types/Game";
import Position from "../types/Position";
import isMoveLegal from "./isMoveLegal";

export default function makeMove(game: Game, initialPosition: Position, intendedPosition: Position){
    //playerToMoveIsMovingCheck()
    //iPFPValidation()
    //pieceColorCheck()
    if(isMoveLegal(game, initialPosition, intendedPosition)){
        const pieceToCapture = game.board[intendedPosition.x][intendedPosition.y]
        game.board[intendedPosition.x][intendedPosition.y]=game.board[initialPosition.x][initialPosition.y]
        game.board[initialPosition.x][initialPosition.y]=null
        game.board[intendedPosition.x][intendedPosition.y]!.position=new Position(intendedPosition.x, intendedPosition.y)
        if(pieceToCapture!=null){
            game.alivePiecesList=game.alivePiecesList.filter(piece => {
                return piece!=pieceToCapture
            })
        }
        if(game.turn==Color.black){
            game.turn = Color.white
        }
        else{
            game.turn = Color.black
        }
    }
}