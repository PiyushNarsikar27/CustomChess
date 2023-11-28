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
var validCoordinates_1 = require("./validCoordinates");
var BishopMoveStrategy = /** @class */ (function () {
    function BishopMoveStrategy() {
    }
    BishopMoveStrategy.prototype.getAccessibleSquares = function (piece, initialPosition, board) {
        var topRightAccessibleSquares = this.getTopRightAccessibleSquares(piece, initialPosition, board);
        var topLeftAccessibleSquares = this.getTopLeftAccessibleSquares(piece, initialPosition, board);
        var bottomRightAccessibleSquares = this.getBottomRightAccessibleSquares(piece, initialPosition, board);
        var bottomLeftAccessibleSquares = this.getBottomLefttAccessibleSquares(piece, initialPosition, board);
        var accessibleSquares = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], topRightAccessibleSquares, true), topLeftAccessibleSquares, true), bottomRightAccessibleSquares, true), bottomLeftAccessibleSquares, true);
        return accessibleSquares;
    };
    BishopMoveStrategy.prototype.getTopRightAccessibleSquares = function (piece, initialPosition, board) {
        var _a;
        var currentX = initialPosition.x + 1;
        var currentY = initialPosition.y + 1;
        var squareToAccess = new Position_1.default(currentX, currentY);
        var topRightAccessibleSquares = [];
        while ((0, validCoordinates_1.default)(squareToAccess)) {
            if (board[currentX][currentY] == null) {
                topRightAccessibleSquares.push(squareToAccess);
            }
            else {
                if (((_a = board[currentX][currentY]) === null || _a === void 0 ? void 0 : _a.getColor()) != piece.getColor()) {
                    topRightAccessibleSquares.push(squareToAccess);
                }
                break;
            }
            currentX++;
            currentY++;
            squareToAccess = new Position_1.default(currentX, currentY);
        }
        return topRightAccessibleSquares;
    };
    BishopMoveStrategy.prototype.getTopLeftAccessibleSquares = function (piece, initialPosition, board) {
        var _a;
        var currentX = initialPosition.x - 1;
        var currentY = initialPosition.y + 1;
        var squareToAccess = new Position_1.default(currentX, currentY);
        var topLeftAccessibleSquares = [];
        while ((0, validCoordinates_1.default)(squareToAccess)) {
            if (board[currentX][currentY] == null) {
                topLeftAccessibleSquares.push(squareToAccess);
            }
            else {
                if (((_a = board[currentX][currentY]) === null || _a === void 0 ? void 0 : _a.getColor()) != piece.getColor()) {
                    topLeftAccessibleSquares.push(squareToAccess);
                }
                break;
            }
            currentX--;
            currentY++;
            squareToAccess = new Position_1.default(currentX, currentY);
        }
        return topLeftAccessibleSquares;
    };
    BishopMoveStrategy.prototype.getBottomRightAccessibleSquares = function (piece, initialPosition, board) {
        var _a;
        var currentX = initialPosition.x + 1;
        var currentY = initialPosition.y - 1;
        var squareToAccess = new Position_1.default(currentX, currentY);
        var bottomRightAccessibleSquares = [];
        while ((0, validCoordinates_1.default)(squareToAccess)) {
            if (board[currentX][currentY] == null) {
                bottomRightAccessibleSquares.push(squareToAccess);
            }
            else {
                if (((_a = board[currentX][currentY]) === null || _a === void 0 ? void 0 : _a.getColor()) != piece.getColor()) {
                    bottomRightAccessibleSquares.push(squareToAccess);
                }
                break;
            }
            currentX++;
            currentY--;
            squareToAccess = new Position_1.default(currentX, currentY);
        }
        return bottomRightAccessibleSquares;
    };
    BishopMoveStrategy.prototype.getBottomLefttAccessibleSquares = function (piece, initialPosition, board) {
        var _a;
        var currentX = initialPosition.x - 1;
        var currentY = initialPosition.y - 1;
        var squareToAccess = new Position_1.default(currentX, currentY);
        var bottomLeftAccessibleSquares = [];
        while ((0, validCoordinates_1.default)(squareToAccess)) {
            if (board[currentX][currentY] == null) {
                bottomLeftAccessibleSquares.push(squareToAccess);
            }
            else {
                if (((_a = board[currentX][currentY]) === null || _a === void 0 ? void 0 : _a.getColor()) != piece.getColor()) {
                    bottomLeftAccessibleSquares.push(squareToAccess);
                }
                break;
            }
            currentX--;
            currentY--;
            squareToAccess = new Position_1.default(currentX, currentY);
        }
        return bottomLeftAccessibleSquares;
    };
    return BishopMoveStrategy;
}());
exports.default = BishopMoveStrategy;
