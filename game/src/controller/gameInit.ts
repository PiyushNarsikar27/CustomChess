import isGameOver from '../utils/isGameOver'
import Position from '../types/Position'
import makeMove from '../utils/makeMove'
import Game from '../types/Game'


const moves = [
    [[4,1],[4,3]],
    [[4,6],[4,4]],
    [[3,0],[5,2]],
    [[3,6],[3,5]],
    [[5,0],[2,3]],
    [[7,6],[7,5]],
    [[5,2],[5,6]],
    [[1,0],[1,1]]
]
const game = new Game()
console.log("game started")
let i=0
while(!isGameOver(game)){
    const ip=new Position(moves[i][0][0], moves[i][0][1])
    const fp=new Position(moves[i][1][0], moves[i][1][1])
    //break if move illegal
    makeMove(game, ip, fp)
    switch(i){
        case 0:
            console.log("e4")
            break
        case 1:
            console.log("e5")
            break
        case 2:
            console.log("Qf3")
            break
        case 3:
            console.log("d6")
            break
        case 4:
            console.log("Bc4")
            break
        case 5:
            console.log("h6")
            break
        case 6:
            console.log("Qf7")
            break
}
    i++
}
console.log("Game is over, final game state: "+game.isCheckmate)