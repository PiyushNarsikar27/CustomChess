import blackBishop from "../resources/bishop-b.svg"
import whiteBishop from "../resources/bishop-w.svg"
import blackKing from "../resources/king-b.svg"
import whiteKing from "../resources/king-w.svg"
import blackKnight from "../resources/knight-b.svg"
import whiteKnight from "../resources/knight-w.svg"
import blackPawn from "../resources/pawn-b.svg"
import whitePawn from "../resources/pawn-w.svg"
import blackQueen from "../resources/queen-b.svg"
import whiteQueen from "../resources/queen-w.svg"
import blackRook from "../resources/rook-b.svg"
import whiteRook from "../resources/rook-w.svg"

export const pieceMap = new Map<string, string>([
    ["BlackBishop", blackBishop],
    ["WhiteBishop", whiteBishop],
    ["BlackKnight", blackKnight],
    ["WhiteKnight", whiteKnight],
    ["BlackPawn", blackPawn],
    ["WhitePawn", whitePawn],
    ["BlackQueen", blackQueen],
    ["WhiteQueen", whiteQueen],
    ["BlackRook", blackRook],
    ["WhiteRook", whiteRook],
    ["BlackKing", blackKing],
    ["WhiteKing", whiteKing],
])