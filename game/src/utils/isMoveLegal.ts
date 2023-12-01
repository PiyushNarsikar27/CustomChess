import Game from "../types/Game";
import Position from "../types/Position";
import checkIfKingIsInCheck from "./checkIfKingIsInCheck";

export default function isMoveLegal(game: Game, initialPosition: Position, intendedPosition: Position): boolean{
    const piece = game.board[initialPosition.x][initialPosition.y]
    if(piece==null){
        return false
    }
    let intendedPositionInAccessibleSquares = false
    const accessibleSquares = piece.getAccessibleSquares(game.board)
    for(let accessibleSquareIndex=0;accessibleSquareIndex<accessibleSquares.length;accessibleSquareIndex++){
        if(accessibleSquares[accessibleSquareIndex].x==intendedPosition.x && accessibleSquares[accessibleSquareIndex].y==intendedPosition.y){
            intendedPositionInAccessibleSquares = true
            break
        }
    }
    if(!intendedPositionInAccessibleSquares){
        return false
    }
    
    return (!checkIfKingIsInCheck(game, initialPosition, intendedPosition))
}