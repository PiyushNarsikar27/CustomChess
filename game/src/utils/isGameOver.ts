import Game from "../types/Game";
import Position from "../types/Position";
import checkIfKingIsInCheck from "./checkIfKingIsInCheck";
import isMoveLegal from './isMoveLegal'

export default function isGameOver(game: Game){
    const defaultPosition = new Position(1000, 1000)
    const isKingInCheck = checkIfKingIsInCheck(game, defaultPosition, defaultPosition)
    let isLegalMoveAvailable = false
    for(let pieceIndex=0;pieceIndex<game.alivePiecesList.length;pieceIndex++){
        if(game.alivePiecesList[pieceIndex].getColor()==game.turn){
            const squaresAccessibleToOwnsPiece = game.alivePiecesList[pieceIndex].getAccessibleSquares(game.board)
            for(let squareIndex=0;squareIndex<squaresAccessibleToOwnsPiece.length;squareIndex++){
                if(isMoveLegal(game, game.alivePiecesList[pieceIndex].position, squaresAccessibleToOwnsPiece[squareIndex])){
                    isLegalMoveAvailable = true
                    break
                }
            }
        }
    }
    if(!isLegalMoveAvailable){
        if(isKingInCheck){
            game.isCheckmate = true
        }
        else{
            game.isStalemate = true
        }
        return true
    }
    return false
}