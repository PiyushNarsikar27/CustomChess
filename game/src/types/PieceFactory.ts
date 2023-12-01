import BishopMoveStrategy from "../piece-move-strategies/BishopMoveStrategy";
import Color from "../types/Color";
import KingMoveStrategy from "../piece-move-strategies/KingMoveStrategy";
import KnightMoveStrategy from "../piece-move-strategies/KnightMoveStrategy";
import PawnMoveStrategy from "../piece-move-strategies/PawnMoveStrategy";
import PieceType from "../types/PieceType";
import Position from "../types/Position";
import QueenMoveStrategy from "../piece-move-strategies/QueenMoveStrategy";
import RookMoveStrategy from "../piece-move-strategies/RookMoveStrategy";
import Piece from "../types/Piece";

export default class PieceFactory{
    createAndReturnInitialPieceConfig(): Piece[]{
        return [...this.returnPawns(), ...this.createRooks(), 
            ...this.createKnights(), ...this.createBishops(), 
        ...this.createQueens(), ...this.createKings()]
    }

    private returnPawns(): Piece[]{
        const pawns: Piece[] = []
        const pawnMoveStrategy = new PawnMoveStrategy()
        for(let i=0;i<8;i++){
            const position = new Position(i, 1)
            const pawn = new Piece(pawnMoveStrategy, PieceType.Pawn, position, Color.white, false)
            pawns.push(pawn)
        }
        for(let i=0;i<8;i++){
            const position = new Position(i, 6)
            const pawn = new Piece(pawnMoveStrategy, PieceType.Pawn, position, Color.black, false)
            pawns.push(pawn)
        }
        return pawns
    }

    private createRooks(): Piece[]{
        const rookMoveStrategy = new RookMoveStrategy()
        const whiteRook1 = new Piece(rookMoveStrategy, PieceType.Rook, new Position(0,0), Color.white, false)
        const whiteRook2 = new Piece(rookMoveStrategy, PieceType.Rook, new Position(7,0), Color.white, false)
        const blackRook1 = new Piece(rookMoveStrategy, PieceType.Rook, new Position(0,7), Color.black, false)
        const blackRook2 = new Piece(rookMoveStrategy, PieceType.Rook, new Position(7,7), Color.black, false)
        return [whiteRook1, whiteRook2, blackRook1, blackRook2]
    }

    private createBishops(): Piece[]{
        const bishopMoveStrategy = new BishopMoveStrategy()
        const whiteBishop1 = new Piece(bishopMoveStrategy, PieceType.Bishop, new Position(2,0), Color.white, false)
        const whiteBishop2 = new Piece(bishopMoveStrategy, PieceType.Bishop, new Position(5,0), Color.white, false)
        const blackBishop1 = new Piece(bishopMoveStrategy, PieceType.Bishop, new Position(2,7), Color.black, false)
        const blackBishop2 = new Piece(bishopMoveStrategy, PieceType.Bishop, new Position(5,7), Color.black, false)
        return [whiteBishop1, whiteBishop2, blackBishop1, blackBishop2]
    }

    private createKnights(): Piece[]{
        const knightMoveStrategy = new KnightMoveStrategy()
        const whiteKnight1 = new Piece(knightMoveStrategy, PieceType.Knight, new Position(1,0), Color.white, true)
        const whiteKnight2 = new Piece(knightMoveStrategy, PieceType.Knight, new Position(6,0), Color.white, true)
        const blackKnight1 = new Piece(knightMoveStrategy, PieceType.Knight, new Position(1,7), Color.black, true)
        const blackKnight2 = new Piece(knightMoveStrategy, PieceType.Knight, new Position(6,7), Color.black, true)
        return [whiteKnight1, whiteKnight2, blackKnight1, blackKnight2]
    }

    private createKings(): Piece[]{
        const kingMoveStrategy = new KingMoveStrategy()
        const whiteKing = new Piece(kingMoveStrategy, PieceType.King, new Position(4,0), Color.white, false)
        const blackKing = new Piece(kingMoveStrategy, PieceType.King, new Position(4,7), Color.black, false)
        return [whiteKing, blackKing]
    }

    private createQueens(): Piece[]{
        const queenMoveStrategy = new QueenMoveStrategy()
        const whiteQueen = new Piece(queenMoveStrategy, PieceType.Queen, new Position(3,0), Color.white, false)
        const blackQueen = new Piece(queenMoveStrategy, PieceType.Queen, new Position(3,7), Color.black, false)
        return [whiteQueen, blackQueen]
    }

}
