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
var validCoordinates_1 = require("./validCoordinates");
var QueenMoveStrategy = /** @class */ (function () {
    function QueenMoveStrategy() {
    }
    QueenMoveStrategy.prototype.getAccessibleSquares = function (piece, initialPosition, board) {
        var topAccessibleSquares = this.getTopAccessibleSquares(piece, initialPosition, board);
        var bottomAccessibleSquares = this.getBottomAccessibleSquares(piece, initialPosition, board);
        var rightAccessibleSquares = this.getRightAccessibleSquares(piece, initialPosition, board);
        var leftAccessibleSquares = this.getLeftAccessibleSquares(piece, initialPosition, board);
        var topRightAccessibleSquares = this.getTopRightAccessibleSquares(piece, initialPosition, board);
        var topLeftAccessibleSquares = this.getTopLeftAccessibleSquares(piece, initialPosition, board);
        var bottomRightAccessibleSquares = this.getBottomRightAccessibleSquares(piece, initialPosition, board);
        var bottomLeftAccessibleSquares = this.getBottomLefttAccessibleSquares(piece, initialPosition, board);
        var accessibleSquares = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], topAccessibleSquares, true), bottomAccessibleSquares, true), rightAccessibleSquares, true), leftAccessibleSquares, true), topRightAccessibleSquares, true), topLeftAccessibleSquares, true), bottomRightAccessibleSquares, true), bottomLeftAccessibleSquares, true);
        return accessibleSquares;
    };
    QueenMoveStrategy.prototype.getTopAccessibleSquares = function (piece, initialPosition, board) {
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
    QueenMoveStrategy.prototype.getBottomAccessibleSquares = function (piece, initialPosition, board) {
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
    QueenMoveStrategy.prototype.getRightAccessibleSquares = function (piece, initialPosition, board) {
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
    QueenMoveStrategy.prototype.getLeftAccessibleSquares = function (piece, initialPosition, board) {
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
    QueenMoveStrategy.prototype.getTopRightAccessibleSquares = function (piece, initialPosition, board) {
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
    QueenMoveStrategy.prototype.getTopLeftAccessibleSquares = function (piece, initialPosition, board) {
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
    QueenMoveStrategy.prototype.getBottomRightAccessibleSquares = function (piece, initialPosition, board) {
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
    QueenMoveStrategy.prototype.getBottomLefttAccessibleSquares = function (piece, initialPosition, board) {
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
    return QueenMoveStrategy;
}());
exports.default = QueenMoveStrategy;
