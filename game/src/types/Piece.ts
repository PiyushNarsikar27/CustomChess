import Color from "../types/Color"
import MoveStrategy from "../piece-move-strategies/MoveStrategy"
import PieceType from "../types/PieceType"
import Position from "../types/Position"

export default class Piece{
    private pieceType: PieceType
    position: Position
    private color: Color
    private canJump: boolean
    private moveStrategy: MoveStrategy

    constructor(moveStrategy: MoveStrategy, pieceType: PieceType, position: Position, color: Color, canJump: boolean){
        this.pieceType= pieceType
        this.moveStrategy = moveStrategy
        this.position = position
        this.color = color
        this.canJump = canJump
    }

    copy(){
        return new Piece(this.moveStrategy, this.pieceType, this.position, this.color, this.canJump)
    }

    getPieceType(){
        return this.pieceType
    }
    
    getColor(): Color{
        return this.color
    }

    getCanJump(): boolean{
        return this.canJump
    }

    getAccessibleSquares(board: (Piece | null)[][]): Position[]{
        return this.moveStrategy.getAccessibleSquares(this, this.position, board)
    }
}
