"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var BishopMoveStrategy_1 = require("./BishopMoveStrategy");
var Color_1 = require("./Color");
var KingMoveStrategy_1 = require("./KingMoveStrategy");
var KnightMoveStrategy_1 = require("./KnightMoveStrategy");
var PawnMoveStrategy_1 = require("./PawnMoveStrategy");
var PieceType_1 = require("./PieceType");
var Position_1 = require("./Position");
var QueenMoveStrategy_1 = require("./QueenMoveStrategy");
var RookMoveStrategy_1 = require("./RookMoveStrategy");
var piece_1 = require("./piece");
var PieceFactory = /** @class */ (function () {
    function PieceFactory() {
    }
    PieceFactory.prototype.createAndReturnInitialPieceConfig = function () {
        return __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], this.returnPawns(), true), this.createRooks(), true), this.createKnights(), true), this.createBishops(), true), this.createQueens(), true), this.createKings(), true);
    };
    PieceFactory.prototype.returnPawns = function () {
        var pawns = [];
        var pawnMoveStrategy = new PawnMoveStrategy_1.default();
        for (var i = 0; i < 8; i++) {
            var position = new Position_1.default(i, 1);
            var pawn = new piece_1.default(pawnMoveStrategy, PieceType_1.default.Pawn, position, Color_1.default.white, false);
            pawns.push(pawn);
        }
        for (var i = 0; i < 8; i++) {
            var position = new Position_1.default(i, 6);
            var pawn = new piece_1.default(pawnMoveStrategy, PieceType_1.default.Pawn, position, Color_1.default.black, false);
            pawns.push(pawn);
        }
        return pawns;
    };
    PieceFactory.prototype.createRooks = function () {
        var rookMoveStrategy = new RookMoveStrategy_1.default();
        var whiteRook1 = new piece_1.default(rookMoveStrategy, PieceType_1.default.Rook, new Position_1.default(0, 0), Color_1.default.white, false);
        var whiteRook2 = new piece_1.default(rookMoveStrategy, PieceType_1.default.Rook, new Position_1.default(7, 0), Color_1.default.white, false);
        var blackRook1 = new piece_1.default(rookMoveStrategy, PieceType_1.default.Rook, new Position_1.default(0, 7), Color_1.default.black, false);
        var blackRook2 = new piece_1.default(rookMoveStrategy, PieceType_1.default.Rook, new Position_1.default(7, 7), Color_1.default.black, false);
        return [whiteRook1, whiteRook2, blackRook1, blackRook2];
    };
    PieceFactory.prototype.createBishops = function () {
        var bishopMoveStrategy = new BishopMoveStrategy_1.default();
        var whiteBishop1 = new piece_1.default(bishopMoveStrategy, PieceType_1.default.Bishop, new Position_1.default(2, 0), Color_1.default.white, false);
        var whiteBishop2 = new piece_1.default(bishopMoveStrategy, PieceType_1.default.Bishop, new Position_1.default(5, 0), Color_1.default.white, false);
        var blackBishop1 = new piece_1.default(bishopMoveStrategy, PieceType_1.default.Bishop, new Position_1.default(2, 7), Color_1.default.black, false);
        var blackBishop2 = new piece_1.default(bishopMoveStrategy, PieceType_1.default.Bishop, new Position_1.default(5, 7), Color_1.default.black, false);
        return [whiteBishop1, whiteBishop2, blackBishop1, blackBishop2];
    };
    PieceFactory.prototype.createKnights = function () {
        var knightMoveStrategy = new KnightMoveStrategy_1.default();
        var whiteKnight1 = new piece_1.default(knightMoveStrategy, PieceType_1.default.Knight, new Position_1.default(1, 0), Color_1.default.white, true);
        var whiteKnight2 = new piece_1.default(knightMoveStrategy, PieceType_1.default.Knight, new Position_1.default(6, 0), Color_1.default.white, true);
        var blackKnight1 = new piece_1.default(knightMoveStrategy, PieceType_1.default.Knight, new Position_1.default(1, 7), Color_1.default.black, true);
        var blackKnight2 = new piece_1.default(knightMoveStrategy, PieceType_1.default.Knight, new Position_1.default(6, 7), Color_1.default.black, true);
        return [whiteKnight1, whiteKnight2, blackKnight1, blackKnight2];
    };
    PieceFactory.prototype.createKings = function () {
        var kingMoveStrategy = new KingMoveStrategy_1.default();
        var whiteKing = new piece_1.default(kingMoveStrategy, PieceType_1.default.King, new Position_1.default(4, 0), Color_1.default.white, false);
        var blackKing = new piece_1.default(kingMoveStrategy, PieceType_1.default.King, new Position_1.default(4, 7), Color_1.default.black, false);
        return [whiteKing, blackKing];
    };
    PieceFactory.prototype.createQueens = function () {
        var queenMoveStrategy = new QueenMoveStrategy_1.default();
        var whiteQueen = new piece_1.default(queenMoveStrategy, PieceType_1.default.Queen, new Position_1.default(3, 0), Color_1.default.white, false);
        var blackQueen = new piece_1.default(queenMoveStrategy, PieceType_1.default.Queen, new Position_1.default(3, 7), Color_1.default.black, false);
        return [whiteQueen, blackQueen];
    };
    return PieceFactory;
}());
exports.default = PieceFactory;
