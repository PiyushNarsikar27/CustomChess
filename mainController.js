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
        x: 7, y: 1
    },
    color: color.black,
    canJump: false,
    eligibleSquares1: [{ x: 7, y: 0 }, { x: 6, y: 2 }],
    eligibleSquares2: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares3: [{ x: 2, y: 4 }, { x: 6, y: 7 }]
};
var piece2 = {
    id: 1,
    position: {
        x: 6, y: 3
    },
    color: color.black,
    canJump: true,
    eligibleSquares1: [{ x: 7, y: 1 }, { x: 6, y: 7 }],
    eligibleSquares2: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares3: [{ x: 2, y: 4 }, { x: 6, y: 7 }]
};
var piece3 = {
    id: 1,
    position: {
        x: 5, y: 6
    },
    color: color.white,
    canJump: true,
    eligibleSquares1: [{ x: 2, y: 4 }, { x: 6, y: 2 }],
    eligibleSquares2: [{ x: 2, y: 4 }, { x: 6, y: 7 }],
    eligibleSquares3: [{ x: 2, y: 4 }, { x: 6, y: 7 }]
};
var pieceKingW = {
    id: 1,
    position: {
        x: 7, y: 0
    },
    color: color.white,
    canJump: true,
    eligibleSquares1: [{ x: 7, y: 1 }, { x: 7, y: 5 }],
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
        if (i == 7 && j == 0) {
            board[i].push(pieceKingW);
        }
        board[i].push(null);
    }
}
var turn = color.white;
var alivePiecesList = [piece1, piece2, piece3, pieceKingB, pieceKingW];
function getCheckersEligibleSquares(whichKing, initialPosition, intendedPosition) {
    for (var j = 0; j < alivePiecesList.length; j++) {
        if (alivePiecesList[j].color != whichKing.color) {
            for (var i = 0; i < alivePiecesList[j].eligibleSquares1.length; i++) {
                if (whichKing.position.x == alivePiecesList[j].eligibleSquares1[i].x && whichKing.position.y == alivePiecesList[j].eligibleSquares1[i].y) { //eligibleSquare calc changes based on initial and intended positions
                    console.log(j);
                    var checkersEligibleSquares = alivePiecesList[j].position;
                    return __spreadArray([checkersEligibleSquares], alivePiecesList[j].eligibleSquares1, true);
                }
            }
        }
    }
    return [];
}
function checkForCheckmate() {
    var whichKing;
    if (turn == color.black) {
        whichKing = pieceKingB;
    }
    else {
        whichKing = pieceKingW;
    }
    var checkPath = getCheckersEligibleSquares(whichKing);
    if (checkPath.length == 0 || whichKing.eligibleSquares1.length != 0) {
        return false;
    }
    if ((board[checkPath[0].x][checkPath[0].y]).canJump) {
        return true;
    }
    for (var i = 0; i < alivePiecesList.length; i++) {
        if (alivePiecesList[i].color == turn) {
            var pieceAccessSquares = alivePiecesList[i].eligibleSquares1;
            for (var j = 0; j < checkPath.length; j++) {
                for (var k = 0; k < pieceAccessSquares.length; k++) {
                    if (pieceAccessSquares[k].x == checkPath[j].x && (pieceAccessSquares[k].y == checkPath[j].y)) { // Add move possible check
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
function isMoveLegal(playerId, initialPosition, finalPosition) {
    //playerToMoveIsMovingCheck()
    //moveOutOfTheBoardCheck()
    var piece = board[initialPosition.x][initialPosition.y];
    if ((piece === null || piece === void 0 ? void 0 : piece.color) != turn) {
        return false;
    }
    var isInEligibleSquares = false;
    for (var i = 0; i < piece.eligibleSquares1.length; i++) {
        if (piece.eligibleSquares1[i].x == finalPosition.x && piece.eligibleSquares1[i].y == finalPosition.y) {
            isInEligibleSquares = true;
            break;
        }
    }
    if (!isInEligibleSquares) {
        return false;
    }
    var whichKing;
    if (turn == color.black) {
        whichKing = pieceKingB;
    }
    else {
        whichKing = pieceKingW;
    }
    if (piece == whichKing || getCheckersEligibleSquares(whichKing, initialPosition, finalPosition).length == 0) {
        return true;
    }
    return false;
}
console.log(isMoveLegal(1, { x: 7, y: 0 }, { x: 7, y: 5 }));
