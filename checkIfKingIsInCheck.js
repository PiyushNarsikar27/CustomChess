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
var Color_1 = require("./Color");
var KingMoveStrategy_1 = require("./KingMoveStrategy");
var Position_1 = require("./Position");
function checkIfKingIsInCheck(game, movedPieceInitialPosition, movedPieceFinalPosition) {
    var moveStrategy = new KingMoveStrategy_1.default();
    var kingInPossibleChcek;
    if (game.turn == Color_1.default.black) {
        kingInPossibleChcek = game.blackKing;
    }
    else {
        kingInPossibleChcek = game.whiteKing;
    }
    var board = game.board.map(function (pieces) {
        var piecesCopy = [];
        pieces.forEach(function (piece) {
            var pieceCopy;
            if (piece == null) {
                pieceCopy = piece;
            }
            else {
                pieceCopy = piece.copy();
            }
            piecesCopy.push(pieceCopy);
        });
        return __spreadArray([], piecesCopy, true);
    });
    var alivePiecesList = game.alivePiecesList.map(function (alivePiece) { return alivePiece; });
    if (movedPieceInitialPosition != movedPieceFinalPosition) {
        var pieceToCapture_1 = board[movedPieceFinalPosition.x][movedPieceFinalPosition.y];
        board[movedPieceFinalPosition.x][movedPieceFinalPosition.y] = board[movedPieceInitialPosition.x][movedPieceInitialPosition.y];
        board[movedPieceInitialPosition.x][movedPieceInitialPosition.y] = null;
        board[movedPieceFinalPosition.x][movedPieceFinalPosition.y].position = new Position_1.default(movedPieceFinalPosition.x, movedPieceFinalPosition.y);
        if (pieceToCapture_1 != null) {
            alivePiecesList = alivePiecesList.filter(function (piece) {
                return piece != pieceToCapture_1;
            });
        }
    }
    for (var pieceIndex = 0; pieceIndex < alivePiecesList.length; pieceIndex++) {
        if (alivePiecesList[pieceIndex].getColor() != game.turn) {
            var squaresAccessibleToOpponentPiece = alivePiecesList[pieceIndex].getAccessibleSquares(board);
            for (var squareIndex = 0; squareIndex < squaresAccessibleToOpponentPiece.length; squareIndex++) {
                if (squaresAccessibleToOpponentPiece[squareIndex].x == kingInPossibleChcek.position.x &&
                    squaresAccessibleToOpponentPiece[squareIndex].y == kingInPossibleChcek.position.y) {
                    return true;
                }
            }
        }
    }
    return false;
}
exports.default = checkIfKingIsInCheck;
