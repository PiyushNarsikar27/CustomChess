import Color from "./Color"
import Game from "./Game"
import KingMoveStrategy from "./KingMoveStrategy"
import Position from "./Position"
import Piece from "./piece"

export default function checkIfKingIsInCheck(game: Game, movedPieceInitialPosition: Position, movedPieceFinalPosition: Position): boolean{
    const moveStrategy = new KingMoveStrategy()
    let kingInPossibleChcek: Piece
    if(game.turn==Color.black){
        kingInPossibleChcek = game.blackKing
    }
    else{
        kingInPossibleChcek = game.whiteKing
    }
    let board = game.board.map(pieces=>{
        let piecesCopy: (Piece|null)[] = []
        pieces.forEach(piece=>{
            var pieceCopy: Piece|null
            if(piece == null){
                pieceCopy=piece
            }
            else{
                pieceCopy  = piece.copy()
            } 
            piecesCopy.push(pieceCopy)
        })
        return [...piecesCopy]
    })
    let alivePiecesList = game.alivePiecesList.map(alivePiece=>alivePiece)
    if(movedPieceInitialPosition!=movedPieceFinalPosition){
        const pieceToCapture = board[movedPieceFinalPosition.x][movedPieceFinalPosition.y]
        board[movedPieceFinalPosition.x][movedPieceFinalPosition.y]=board[movedPieceInitialPosition.x][movedPieceInitialPosition.y]
        board[movedPieceInitialPosition.x][movedPieceInitialPosition.y]=null
        board[movedPieceFinalPosition.x][movedPieceFinalPosition.y]!.position=new Position(movedPieceFinalPosition.x, movedPieceFinalPosition.y)
        if(pieceToCapture!=null){
            alivePiecesList=alivePiecesList.filter(piece => {
                return piece!=pieceToCapture
            })
        }
    }
    for(let pieceIndex=0;pieceIndex<alivePiecesList.length;pieceIndex++){
        if(alivePiecesList[pieceIndex].getColor()!=game.turn){
            const squaresAccessibleToOpponentPiece = alivePiecesList[pieceIndex].getAccessibleSquares(board)
            for(let squareIndex=0;squareIndex<squaresAccessibleToOpponentPiece.length;squareIndex++){
                if(squaresAccessibleToOpponentPiece[squareIndex].x==kingInPossibleChcek.position.x &&
                squaresAccessibleToOpponentPiece[squareIndex].y==kingInPossibleChcek.position.y){
                    return true
                }
            }
        }
    }
    return false
}