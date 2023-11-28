"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
var Position_1 = require("./Position");
var isMoveLegal_1 = require("./isMoveLegal");
function makeMove(game, initialPosition, intendedPosition) {
    //playerToMoveIsMovingCheck()
    //iPFPValidation()
    //pieceColorCheck()
    if ((0, isMoveLegal_1.default)(game, initialPosition, intendedPosition)) {
        var pieceToCapture_1 = game.board[intendedPosition.x][intendedPosition.y];
        game.board[intendedPosition.x][intendedPosition.y] = game.board[initialPosition.x][initialPosition.y];
        game.board[initialPosition.x][initialPosition.y] = null;
        game.board[intendedPosition.x][intendedPosition.y].position = new Position_1.default(intendedPosition.x, intendedPosition.y);
        if (pieceToCapture_1 != null) {
            game.alivePiecesList = game.alivePiecesList.filter(function (piece) {
                return piece != pieceToCapture_1;
            });
        }
        if (game.turn == Color_1.default.black) {
            game.turn = Color_1.default.white;
        }
        else {
            game.turn = Color_1.default.black;
        }
    }
}
exports.default = makeMove;
