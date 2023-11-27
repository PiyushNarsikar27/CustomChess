import Color from "./Color"
import { KingMoveStrategy } from "./KingMoveStrategy"
import PieceType from "./PieceType"
import Position from "./Position"
import gameState from "./gameState"
import Piece from "./piece"

export default function checkIfKingIsInCheck(board: (Piece | null)[][], alivePiecesList: Piece[], movedPieceInitialPosition: Position, movedPieceFinalPosition: Position): boolean{
    const moveStrategy = new KingMoveStrategy()
    var kingW = new Piece(moveStrategy, PieceType.King, new Position(4,0), Color.white, false)
    var kingB = new Piece(moveStrategy, PieceType.King, new Position(4,7), Color.black, false)
    var kingInPossibleChcek: Piece
    if(gameState.turn==Color.black){
        kingInPossibleChcek = kingW
    }
    else{
        kingInPossibleChcek = kingB
    }
    if(movedPieceInitialPosition!=movedPieceFinalPosition){
        var pieceToCapture = board[movedPieceFinalPosition.x][movedPieceFinalPosition.y]
        board[movedPieceFinalPosition.x][movedPieceFinalPosition.y]=board[movedPieceInitialPosition.x][movedPieceInitialPosition.y]
        board[movedPieceInitialPosition.x][movedPieceInitialPosition.y]=null
        if(pieceToCapture!=null){
            alivePiecesList=alivePiecesList.filter(piece => {
                piece!=pieceToCapture
            })
        }
    }
    for(var pieceIndex=0;pieceIndex<alivePiecesList.length;pieceIndex++){
        if(alivePiecesList[pieceIndex].getColor()!=gameState.turn){
            var squaresAccessibleToOpponentPiece = alivePiecesList[pieceIndex].getAccessibleSquares(board)
            for(var squareIndex=0;squareIndex<squaresAccessibleToOpponentPiece.length;squareIndex++){
                if(squaresAccessibleToOpponentPiece[squareIndex].x==kingInPossibleChcek.getPosition().x &&
                squaresAccessibleToOpponentPiece[squareIndex].y==kingInPossibleChcek.getPosition().y){
                    return true
                }
            }
        }
    }
    return false
}