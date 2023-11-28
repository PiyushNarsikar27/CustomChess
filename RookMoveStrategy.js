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
var Position_1 = require("./Position");
var Constants_1 = require("./Constants");
var RookMoveStrategy = /** @class */ (function () {
    function RookMoveStrategy() {
    }
    RookMoveStrategy.prototype.getAccessibleSquares = function (piece, initialPosition, board) {
        var topAccessibleSquares = this.getTopAccessibleSquares(piece, initialPosition, board);
        var bottomAccessibleSquares = this.getBottomAccessibleSquares(piece, initialPosition, board);
        var rightAccessibleSquares = this.getRightAccessibleSquares(piece, initialPosition, board);
        var leftAccessibleSquares = this.getLeftAccessibleSquares(piece, initialPosition, board);
        var accessibleSquares = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], topAccessibleSquares, true), bottomAccessibleSquares, true), rightAccessibleSquares, true), leftAccessibleSquares, true);
        return accessibleSquares;
    };
    RookMoveStrategy.prototype.getTopAccessibleSquares = function (piece, initialPosition, board) {
        var _a;
        var topAccessibleSquares = [];
        for (var currentY = initialPosition.y + 1; currentY < Constants_1.default.boardSize; currentY++) {
            if (board[initialPosition.x][currentY] == null) {
                topAccessibleSquares.push(new Position_1.default(initialPosition.x, currentY));
            }
            else {
                if (((_a = board[initialPosition.x][currentY]) === null || _a === void 0 ? void 0 : _a.getColor()) != piece.getColor()) {
                    topAccessibleSquares.push(new Position_1.default(initialPosition.x, currentY));
                }
                break;
            }
        }
        return topAccessibleSquares;
    };
    RookMoveStrategy.prototype.getBottomAccessibleSquares = function (piece, initialPosition, board) {
        var _a;
        var bottomAccessibleSquares = [];
        for (var currentY = initialPosition.y - 1; currentY >= 0; currentY--) {
            if (board[initialPosition.x][currentY] == null) {
                bottomAccessibleSquares.push(new Position_1.default(initialPosition.x, currentY));
            }
            else {
                if (((_a = board[initialPosition.x][currentY]) === null || _a === void 0 ? void 0 : _a.getColor()) != piece.getColor()) {
                    bottomAccessibleSquares.push(new Position_1.default(initialPosition.x, currentY));
                }
                break;
            }
        }
        return bottomAccessibleSquares;
    };
    RookMoveStrategy.prototype.getRightAccessibleSquares = function (piece, initialPosition, board) {
        var _a;
        var rightAccessibleSquares = [];
        for (var currentX = initialPosition.x + 1; currentX < Constants_1.default.boardSize; currentX++) {
            if (board[currentX][initialPosition.y] == null) {
                rightAccessibleSquares.push(new Position_1.default(currentX, initialPosition.y));
            }
            else {
                if (((_a = board[currentX][initialPosition.y]) === null || _a === void 0 ? void 0 : _a.getColor()) != piece.getColor()) {
                    rightAccessibleSquares.push(new Position_1.default(currentX, initialPosition.y));
                }
                break;
            }
        }
        return rightAccessibleSquares;
    };
    RookMoveStrategy.prototype.getLeftAccessibleSquares = function (piece, initialPosition, board) {
        var _a;
        var leftAccessibleSquares = [];
        for (var currentX = initialPosition.x - 1; currentX >= 0; currentX--) {
            if (board[currentX][initialPosition.y] == null) {
                leftAccessibleSquares.push(new Position_1.default(currentX, initialPosition.y));
            }
            else {
                if (((_a = board[currentX][initialPosition.y]) === null || _a === void 0 ? void 0 : _a.getColor()) != piece.getColor()) {
                    leftAccessibleSquares.push(new Position_1.default(currentX, initialPosition.y));
                }
                break;
            }
        }
        return leftAccessibleSquares;
    };
    return RookMoveStrategy;
}());
exports.default = RookMoveStrategy;
