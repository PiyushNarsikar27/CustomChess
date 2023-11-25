var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var color;
(function (color) {
    color[color["white"] = 0] = "white";
    color[color["black"] = 1] = "black";
})(color || (color = {}));
var piece1 = {
    id: 1,
    position: {
        x: 5, y: 6
    },
    color: color.white,
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
    color: color.black,
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
    color: color.black,
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
    color: color.white,
    canJump: true,
    eligibleSquares1: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares2: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares3: [{ x: 2, y: 4 }, { x: 6, y: 7 }]
};
var pieceKingB = {
    id: 1,
    position: {
        x: 1, y: 4
    },
    color: color.black,
    canJump: true,
    eligibleSquares1: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares2: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares3: [{ x: 2, y: 4 }, { x: 6, y: 7 }]
};
var board = [];
for (var i = 0; i < 8; i++) {
    board.push([]);
    for (var j = 0; j < 8; j++) {
        board[i].push(null);
    }
}
var turn = color.white;
var alivePiecesList = [piece1, piece2, piece3, pieceKingB, pieceKingW];
function getCheckersEligibleSquares(initialPosition, intendedPosition, whichKing) {
    for (var j = 0; j < alivePiecesList.length; j++) {
        if (alivePiecesList[j].color != whichKing.color) {
            for (var i = 0; i < alivePiecesList[j].eligibleSquares1.length; i++) {
                if (whichKing.position.x == alivePiecesList[j].eligibleSquares1[i].x && whichKing.position.y == alivePiecesList[j].eligibleSquares1[i].y) { //eligibleSquare calc changes based on initial and intended positions
                    var checkPath = alivePiecesList[j].position;
                    return __spreadArray([checkPath], alivePiecesList[j].eligibleSquares1, true);
                }
            }
        }
    }
    return [];
}
var x = getCheckersEligibleSquares({ x: 5, y: 0 }, { x: 7, y: 4 }, pieceKingB);
console.log(x);
