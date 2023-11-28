"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkIfKingIsInCheck_1 = require("./checkIfKingIsInCheck");
function isMoveLegal(game, initialPosition, intendedPosition) {
    var piece = game.board[initialPosition.x][initialPosition.y];
    if (piece == null) {
        return false;
    }
    var intendedPositionInAccessibleSquares = false;
    var accessibleSquares = piece.getAccessibleSquares(game.board);
    for (var accessibleSquareIndex = 0; accessibleSquareIndex < accessibleSquares.length; accessibleSquareIndex++) {
        if (accessibleSquares[accessibleSquareIndex].x == intendedPosition.x && accessibleSquares[accessibleSquareIndex].y == intendedPosition.y) {
            intendedPositionInAccessibleSquares = true;
            break;
        }
    }
    if (!intendedPositionInAccessibleSquares) {
        return false;
    }
    return (!(0, checkIfKingIsInCheck_1.default)(game, initialPosition, intendedPosition));
}
exports.default = isMoveLegal;
