import Color from "../types/Color";
import constants from "../utils/Constants";
import PieceFactory from "../types/PieceFactory";
import Piece from "../types/Piece";

export default class Game{
    turn: Color
    board: (Piece|null)[][]
    alivePiecesList: Piece[]
    whiteKing: Piece
    blackKing: Piece
    isCheckmate: boolean
    isStalemate: boolean
    constructor(){
        this.board = []
        this.turn=Color.white
        for(let i=0;i<constants.boardSize;i++){
            this.board.push([])
            for(let j=0; j<constants.boardSize;j++){
                this.board[i].push(null)
            }
        }
        const pieceList = this.createAndGetPieceList()
        pieceList.forEach(piece => {
            this.board[piece.position.x][piece.position.y] = piece
        })
        this.whiteKing = this.board[4][0]!
        this.blackKing = this.board[4][7]!
        this.alivePiecesList = pieceList
        this.isCheckmate = false
        this.isStalemate = false
    }

    private createAndGetPieceList(): Piece[]{
        const pieceFactory = new PieceFactory()
        return pieceFactory.createAndReturnInitialPieceConfig()
    }
}
