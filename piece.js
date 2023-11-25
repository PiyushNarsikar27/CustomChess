"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mainController_1 = require("./mainController");
var piece1 = {
    id: 1,
    position: {
        x: 5, y: 6
    },
    color: mainController_1.default.white,
    canJump: true,
    eligibleSquares1: [{ x: 1, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares2: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares3: [{ x: 2, y: 4 }, { x: 6, y: 7 }]
};
var piece2 = {
    id: 1,
    position: {
        x: 5, y: 6
    },
    color: mainController_1.default.black,
    canJump: true,
    eligibleSquares1: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares2: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares3: [{ x: 2, y: 4 }, { x: 6, y: 7 }]
};
var piece3 = {
    id: 1,
    position: {
        x: 5, y: 6
    },
    color: mainController_1.default.black,
    canJump: true,
    eligibleSquares1: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares2: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares3: [{ x: 2, y: 4 }, { x: 6, y: 7 }]
};
var pieceKingW = {
    id: 1,
    position: {
        x: 5, y: 6
    },
    color: mainController_1.default.white,
    canJump: true,
    eligibleSquares1: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares2: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares3: [{ x: 2, y: 4 }, { x: 6, y: 7 }]
};
var pieceKingB = {
    id: 1,
    position: {
        x: 2, y: 4
    },
    color: mainController_1.default.black,
    canJump: true,
    eligibleSquares1: [{ x: 1, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares2: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares3: [{ x: 2, y: 4 }, { x: 6, y: 7 }]
};
