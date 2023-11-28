"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boardSize = 8;
function validCoordinates(position) {
    if (position.x > boardSize - 1 || position.x < 0 || position.y > boardSize - 1 || position.y < 0) {
        return false;
    }
    return true;
}
exports.default = validCoordinates;
