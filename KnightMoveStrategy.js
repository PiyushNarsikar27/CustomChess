"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("./Position");
var validCoordinates_1 = require("./validCoordinates");
var KnightMoveStrategy = /** @class */ (function () {
    function KnightMoveStrategy() {
    }
    KnightMoveStrategy.prototype.getAccessibleSquares = function (piece, initialPosition, board) {
        var accessibleSquares = [];
        // refactor below assignments
        var twoUpOneRightSquare = new Position_1.default(initialPosition.x + 1, initialPosition.y + 2);
        var twoUpOneLeftSquare = new Position_1.default(initialPosition.x - 1, initialPosition.y + 2);
        var twoLeftOneUpSquare = new Position_1.default(initialPosition.x - 2, initialPosition.y + 1);
        var twoRightOneUpSquare = new Position_1.default(initialPosition.x + 2, initialPosition.y + 1);
        var twoDownOneRightSquare = new Position_1.default(initialPosition.x + 1, initialPosition.y - 2);
        var twoDownOneLeftSquare = new Position_1.default(initialPosition.x - 1, initialPosition.y - 2);
        var twoLeftOneDownSquare = new Position_1.default(initialPosition.x - 2, initialPosition.y - 1);
        var twoRightOneDownSquare = new Position_1.default(initialPosition.x + 2, initialPosition.y - 1);
        var listOfPossibleSquares = [twoUpOneRightSquare, twoUpOneLeftSquare, twoLeftOneUpSquare, twoRightOneUpSquare, twoDownOneRightSquare,
            twoDownOneLeftSquare, twoLeftOneDownSquare, twoRightOneDownSquare];
        listOfPossibleSquares.forEach(function (possibleSquare) {
            var _a;
            if ((0, validCoordinates_1.default)(possibleSquare) && ((_a = board[possibleSquare.x][possibleSquare.y]) === null || _a === void 0 ? void 0 : _a.getColor()) != piece.getColor()) {
                accessibleSquares.push(possibleSquare);
            }
        });
        return accessibleSquares;
    };
    return KnightMoveStrategy;
}());
exports.default = KnightMoveStrategy;
