"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("./Position");
var checkIfKingIsInCheck_1 = require("./checkIfKingIsInCheck");
var isMoveLegal_1 = require("./isMoveLegal");
function isGameOver(game) {
    var defaultPosition = new Position_1.default(0, 0);
    var isKingInCheck = (0, checkIfKingIsInCheck_1.default)(game, defaultPosition, defaultPosition);
    var isLegalMoveAvailable = false;
    for (var pieceIndex = 0; pieceIndex < game.alivePiecesList.length; pieceIndex++) {
        if (game.alivePiecesList[pieceIndex].getColor() == game.turn) {
            var squaresAccessibleToOwnsPiece = game.alivePiecesList[pieceIndex].getAccessibleSquares(game.board);
            for (var squareIndex = 0; squareIndex < squaresAccessibleToOwnsPiece.length; squareIndex++) {
                if ((0, isMoveLegal_1.default)(game, game.alivePiecesList[pieceIndex].position, squaresAccessibleToOwnsPiece[squareIndex])) {
                    isLegalMoveAvailable = true;
                    break;
                }
            }
        }
    }
    if (!isLegalMoveAvailable) {
        if (isKingInCheck) {
            game.isCheckmate = true;
        }
        else {
            game.isStalemate = true;
        }
        return true;
    }
    return false;
}
exports.default = isGameOver;
