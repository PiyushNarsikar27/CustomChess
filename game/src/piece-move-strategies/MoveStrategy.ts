import Position from "../types/Position";
import Piece from "../types/Piece";

interface MoveStrategy{
    getAccessibleSquares(piece: Piece, initialPosition: Position, board: (Piece | null)[][]): Position[]
}

export default MoveStrategy