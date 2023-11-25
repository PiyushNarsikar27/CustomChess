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
            x: 5, y: 6
        },
        color: color.white,
        canJump: true,
        eligibleSquares1: [{x:1,y:4}, {x:6,y:7}],
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
                x: 5, y: 6
            },
            color: color.black,
            canJump: true,
            eligibleSquares1: [{x:2,y:4}, {x:6,y:7}],
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
                color: color.black,
                canJump: true,
                eligibleSquares1: [{x:2,y:4}, {x:6,y:7}],
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
                        x: 5, y: 6
                    },
                    color: color.white,
                    canJump: true,
                    eligibleSquares1: [{x:2,y:4}, {x:6,y:7}],
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
                    
     

var board: typeof piece1 | null[][] = []
for(var i=0;i<8;i++){
    board.push([])
    for(var j=0;j<8;j++){
        board[i].push(null)
    }
}


var turn: color = color.white

var alivePiecesList: typeof piece1[] = [piece1, piece2, piece3, pieceKingB, pieceKingW]

function getCheckersEligibleSquares(initialPosition: typeof piece1.position, 
    intendedPosition: typeof piece1.position,whichKing: typeof piece1): typeof piece1.eligibleSquares1{
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

