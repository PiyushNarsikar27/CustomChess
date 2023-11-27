import Color from "./Color";
import Piece from "./piece";

var gameState: {
    turn: Color,
    board: (Piece | null)[][],
    alivePiecesList: Piece[]
    isCheckmate: boolean,
    isStalemate: boolean
} = {
    turn: Color.white,
    board: [],
    alivePiecesList: [],
    isCheckmate: false,
    isStalemate: false
}
export default gameState
