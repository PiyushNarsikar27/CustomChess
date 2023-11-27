import Color from "./Color"
import MoveStrategy from "./MoveStrategy"
import PieceType from "./PieceType"
import Position from "./Position"

export default class Piece{
    private pieceType: PieceType
    private position: Position
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

    getPieceType(){
        return this.pieceType
    }

    getPosition(): Position{
        return this.position
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
