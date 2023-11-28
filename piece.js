"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Piece = /** @class */ (function () {
    function Piece(moveStrategy, pieceType, position, color, canJump) {
        this.pieceType = pieceType;
        this.moveStrategy = moveStrategy;
        this.position = position;
        this.color = color;
        this.canJump = canJump;
    }
    Piece.prototype.copy = function () {
        return new Piece(this.moveStrategy, this.pieceType, this.position, this.color, this.canJump);
    };
    Piece.prototype.getPieceType = function () {
        return this.pieceType;
    };
    Piece.prototype.getColor = function () {
        return this.color;
    };
    Piece.prototype.getCanJump = function () {
        return this.canJump;
    };
    Piece.prototype.getAccessibleSquares = function (board) {
        return this.moveStrategy.getAccessibleSquares(this, this.position, board);
    };
    return Piece;
}());
exports.default = Piece;
