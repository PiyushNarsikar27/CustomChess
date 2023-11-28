"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("./Position");
var validCoordinates_1 = require("./validCoordinates");
var Color_1 = require("./Color");
var PawnMoveStrategy = /** @class */ (function () {
    function PawnMoveStrategy() {
    }
    PawnMoveStrategy.prototype.getAccessibleSquares = function (piece, initialPosition, board) {
        var accessibleSquares = [];
        var nextSquareY;
        var nextToNextSquareY;
        var initialSquareY;
        if (piece.getColor() == Color_1.default.white) {
            nextSquareY = initialPosition.y + 1;
            nextToNextSquareY = initialPosition.y + 2;
            initialSquareY = 1;
        }
        else {
            nextSquareY = initialPosition.y - 1;
            nextToNextSquareY = initialPosition.y - 2;
            initialSquareY = 6;
        }
        var verticallyNextSquare = new Position_1.default(initialPosition.x, nextSquareY);
        var verticallyNextToNextSquare = new Position_1.default(initialPosition.x, nextToNextSquareY);
        var diagonallyRightSquare = new Position_1.default(initialPosition.x + 1, nextSquareY);
        var diagonallyLeftSquare = new Position_1.default(initialPosition.x - 1, nextSquareY);
        if ((0, validCoordinates_1.default)(verticallyNextSquare) && board[verticallyNextSquare.x][verticallyNextSquare.y] == null) {
            accessibleSquares.push(verticallyNextSquare);
        }
        if (initialPosition.y == initialSquareY && (0, validCoordinates_1.default)(verticallyNextToNextSquare) && board[verticallyNextToNextSquare.x][verticallyNextToNextSquare.y] == null) {
            accessibleSquares.push(verticallyNextToNextSquare);
        }
        if ((0, validCoordinates_1.default)(diagonallyRightSquare) && board[diagonallyRightSquare.x][diagonallyRightSquare.y] != null &&
            board[diagonallyRightSquare.x][diagonallyRightSquare.y].getColor() != piece.getColor()) {
            accessibleSquares.push(diagonallyRightSquare);
        }
        if ((0, validCoordinates_1.default)(diagonallyLeftSquare) && board[diagonallyLeftSquare.x][diagonallyLeftSquare.y] != null
            && board[diagonallyLeftSquare.x][diagonallyLeftSquare.y].getColor() != piece.getColor()) {
            accessibleSquares.push(diagonallyLeftSquare);
        }
        return accessibleSquares;
    };
    return PawnMoveStrategy;
}());
exports.default = PawnMoveStrategy;
