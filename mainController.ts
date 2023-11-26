enum color{
    white, black
}

const piece1: {
    id: number,
    position: {
        x: number, y: number
    },
    color: color,
    canJump: boolean,
    eligibleSquares1: {
        x: number, y: number
    }[],
    eligibleSquares2: {
        x: number, y: number
    }[],
    eligibleSquares3: {
        x: number, y: number
    }[]
    } = {
        id: 1,
        position: {
            x: 7, y: 1
        },
        color: color.black,
        canJump: false,
        eligibleSquares1: [{x:7,y:0}, {x:6,y:2}],
        eligibleSquares2: [{x:2,y:4}, {x:6,y:7}],
        eligibleSquares3: [{x:2,y:4}, {x:6,y:7}]
    }
    
    const piece2: {
        id: number,
        position: {
            x: number, y: number
        },
        color: color,
        canJump: boolean,
        eligibleSquares1: {
            x: number, y: number
        }[],
        eligibleSquares2: {
            x: number, y: number
        }[],
        eligibleSquares3: {
            x: number, y: number
        }[]
        } = {
            id: 1,
            position: {
                x: 6, y: 3
            },
            color: color.black,
            canJump: true,
            eligibleSquares1: [{x:7,y:1}, {x:6,y:7}],
            eligibleSquares2: [{x:2,y:4}, {x:6,y:7}],
            eligibleSquares3: [{x:2,y:4}, {x:6,y:7}]
        }
    
        
        const piece3: {
            id: number,
            position: {
                x: number, y: number
            },
            color: color,
            canJump: boolean,
            eligibleSquares1: {
                x: number, y: number
            }[],
            eligibleSquares2: {
                x: number, y: number
            }[],
            eligibleSquares3: {
                x: number, y: number
            }[]
            } = {
                id: 1,
                position: {
                    x: 5, y: 6
                },
                color: color.white,
                canJump: true,
                eligibleSquares1: [{x:2,y:4}, {x:6,y:2}],
                eligibleSquares2: [{x:2,y:4}, {x:6,y:7}],
                eligibleSquares3: [{x:2,y:4}, {x:6,y:7}]
            }
    
            
            const pieceKingW: {
                id: number,
                position: {
                    x: number, y: number
                },
                color: color,
                canJump: boolean,
                eligibleSquares1: {
                    x: number, y: number
                }[],
                eligibleSquares2: {
                    x: number, y: number
                }[],
                eligibleSquares3: {
                    x: number, y: number
                }[]
                } = {
                    id: 1,
                    position: {
                        x: 7, y: 0
                    },
                    color: color.white,
                    canJump: true,
                    eligibleSquares1: [{x:7, y:1}, {x:7, y:5}],
                    eligibleSquares2: [{x:2,y:4}, {x:6,y:7}],
                    eligibleSquares3: [{x:2,y:4}, {x:6,y:7}]
                }
    
                const pieceKingB: {
                    id: number,
                    position: {
                        x: number, y: number
                    },
                    color: color,
                    canJump: boolean,
                    eligibleSquares1: {
                        x: number, y: number
                    }[],
                    eligibleSquares2: {
                        x: number, y: number
                    }[],
                    eligibleSquares3: {
                        x: number, y: number
                    }[]
                    } = {
                        id: 1,
                        position: {
                            x: 1, y: 4
                        },
                        color: color.black,
                        canJump: true,
                        eligibleSquares1: [{x:2,y:4}, {x:6,y:7}],
                        eligibleSquares2: [{x:2,y:4}, {x:6,y:7}],
                        eligibleSquares3: [{x:2,y:4}, {x:6,y:7}]
                    }
                    
     

var board: (typeof piece1 | null)[][] = []
for(var i=0;i<8;i++){
    board.push([])
    for(var j=0;j<8;j++){
        if(i==7 && j==0){
            board[i].push(pieceKingW)
        }
        board[i].push(null)
    }
}


var turn: color = color.white

var alivePiecesList: typeof piece1[] = [piece1, piece2, piece3, pieceKingB, pieceKingW]

function getCheckersEligibleSquares(whichKing: typeof piece1, initialPosition?: typeof piece1.position, 
    intendedPosition?: typeof piece1.position): typeof piece1.eligibleSquares1{
    for(var j=0;j<alivePiecesList.length;j++){
        if(alivePiecesList[j].color!=whichKing.color){
            for(var i=0;i<alivePiecesList[j].eligibleSquares1.length;i++){
                if(whichKing.position.x==alivePiecesList[j].eligibleSquares1[i].x && whichKing.position.y==alivePiecesList[j].eligibleSquares1[i].y){ //eligibleSquare calc changes based on initial and intended positions
                    var checkersEligibleSquares = alivePiecesList[j].position
                    return [checkersEligibleSquares, ...alivePiecesList[j].eligibleSquares1]
                }
            }
        }
    }
    return []
}

function checkForCheckmate(): boolean{
    var whichKing: typeof piece1
    if(turn==color.black){
        whichKing=pieceKingB
    } else{
        whichKing=pieceKingW
    }
    var checkPath: typeof piece1.eligibleSquares1=getCheckersEligibleSquares(whichKing)
    if(checkPath.length==0 || whichKing.eligibleSquares1.length!=0){
        return false
    }
    if((board[checkPath[0].x][checkPath[0].y]!).canJump){
        return true
    }
    for(var i=0;i<alivePiecesList.length;i++){
        if(alivePiecesList[i].color==turn){
            var pieceAccessSquares=alivePiecesList[i].eligibleSquares1
            for(var j=0;j<checkPath.length;j++){
                for(var k=0;k<pieceAccessSquares.length;k++){
                    if(pieceAccessSquares[k].x==checkPath[j].x && (pieceAccessSquares[k].y==checkPath[j].y)){ // Add move possible check
                        return false
                    }
                }
            }
        }
    }
    return true
}

function isMoveLegal(playerId: number, initialPosition: typeof piece1.position, finalPosition: typeof piece1.position): boolean{
    //playerToMoveIsMovingCheck()
    //moveOutOfTheBoardCheck()
    var piece = board[initialPosition.x][initialPosition.y]
    if(piece?.color!=turn){
        return false
    }
    var isInEligibleSquares=false
    for(var i=0;i<piece.eligibleSquares1.length;i++){
        if(piece.eligibleSquares1[i].x==finalPosition.x && piece.eligibleSquares1[i].y==finalPosition.y){
            isInEligibleSquares = true
            break
        }
    }
    if(!isInEligibleSquares){
        return false
    }
    var whichKing: typeof piece1
    if(turn==color.black){
        whichKing=pieceKingB
    } else{
        whichKing=pieceKingW
    }
    if(piece==whichKing || getCheckersEligibleSquares(whichKing, initialPosition, finalPosition).length==0){
        return true
    }
    return false
}

console.log(isMoveLegal(1, {x:7, y:0}, {x:7, y:5}))