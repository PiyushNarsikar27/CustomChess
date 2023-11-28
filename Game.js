"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
var Constants_1 = require("./Constants");
var PieceFactory_1 = require("./PieceFactory");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.board = [];
        this.turn = Color_1.default.white;
        for (var i = 0; i < Constants_1.default.boardSize; i++) {
            this.board.push([]);
            for (var j = 0; j < Constants_1.default.boardSize; j++) {
                this.board[i].push(null);
            }
        }
        var pieceList = this.createAndGetPieceList();
        pieceList.forEach(function (piece) {
            _this.board[piece.position.x][piece.position.y] = piece;
        });
        this.whiteKing = this.board[4][0];
        this.blackKing = this.board[4][7];
        this.alivePiecesList = pieceList;
        this.isCheckmate = false;
        this.isStalemate = false;
    }
    Game.prototype.createAndGetPieceList = function () {
        var pieceFactory = new PieceFactory_1.default();
        return pieceFactory.createAndReturnInitialPieceConfig();
    };
    return Game;
}());
exports.default = Game;
