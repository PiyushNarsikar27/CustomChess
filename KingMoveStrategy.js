"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("./Position");
var validCoordinates_1 = require("./validCoordinates");
var KingMoveStrategy = /** @class */ (function () {
    function KingMoveStrategy() {
    }
    KingMoveStrategy.prototype.getAccessibleSquares = function (piece, initialPosition, board) {
        var accessibleSquares = [];
        // refactor below assignments
        var topSquare = new Position_1.default(initialPosition.x, initialPosition.y + 1);
        var topRightSquare = new Position_1.default(initialPosition.x + 1, initialPosition.y + 1);
        var rightSquare = new Position_1.default(initialPosition.x + 1, initialPosition.y);
        var bottomRightSquare = new Position_1.default(initialPosition.x + 1, initialPosition.y - 1);
        var bottomSquare = new Position_1.default(initialPosition.x, initialPosition.y - 1);
        var bottomLeftSquare = new Position_1.default(initialPosition.x - 1, initialPosition.y - 1);
        var leftSquare = new Position_1.default(initialPosition.x - 1, initialPosition.y);
        var topLeftSquare = new Position_1.default(initialPosition.x - 1, initialPosition.y + 1);
        var listOfPossibleSquares = [topSquare, topRightSquare, rightSquare, bottomRightSquare, bottomSquare,
            bottomLeftSquare, leftSquare, topLeftSquare];
        listOfPossibleSquares.forEach(function (possibleSquare) {
            var _a;
            if ((0, validCoordinates_1.default)(possibleSquare) && ((_a = board[possibleSquare.x][possibleSquare.y]) === null || _a === void 0 ? void 0 : _a.getColor()) != piece.getColor()) {
                accessibleSquares.push(possibleSquare);
            }
        });
        return accessibleSquares;
    };
    return KingMoveStrategy;
}());
exports.default = KingMoveStrategy;
