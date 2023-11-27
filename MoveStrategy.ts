import Position from "./Position";
import Piece from "./piece";

interface MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]
}

export default MoveStrategy