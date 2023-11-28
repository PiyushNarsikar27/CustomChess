"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isGameOver_1 = require("./isGameOver");
var Position_1 = require("./Position");
var makeMove_1 = require("./makeMove");
var Game_1 = require("./Game");
var moves = [
    [[4, 1], [4, 3]],
    [[4, 6], [4, 4]],
    [[3, 0], [5, 2]],
    [[3, 6], [3, 5]],
    [[5, 0], [2, 3]],
    [[7, 6], [7, 5]],
    [[5, 2], [5, 6]],
    [[1, 0], [1, 1]]
];
var game = new Game_1.default();
console.log("game started");
var i = 0;
while (!(0, isGameOver_1.default)(game)) {
    var ip = new Position_1.default(moves[i][0][0], moves[i][0][1]);
    var fp = new Position_1.default(moves[i][1][0], moves[i][1][1]);
    //break if move illegal
    (0, makeMove_1.default)(game, ip, fp);
    switch (i) {
        case 0:
            console.log("e4");
            break;
        case 1:
            console.log("e5");
            break;
        case 2:
            console.log("Qf3");
            break;
        case 3:
            console.log("d6");
            break;
        case 4:
            console.log("Bc4");
            break;
        case 5:
            console.log("h6");
            break;
        case 6:
            console.log("Qf7");
            break;
    }
    i++;
}
console.log("Game is over, final game state: " + game.isCheckmate);
