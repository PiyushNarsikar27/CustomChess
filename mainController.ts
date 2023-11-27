import * as readline from 'readline'
import isGameOver from './isGameOver'
import Position from './Position'
import makeMove from './makeMove'
import gameState from './gameState'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// Game.init()
console.log("game started")
while(!isGameOver){
    var ip =new Position(0,0)
    var fp=new Position(0,0)
    rl.question('iP: ', (ans) => {
        ip.x = parseInt(ans[0])
        ip.y = parseInt(ans[1])
    })
    rl.question('fP: ', (ans) => {
        fp.x = parseInt(ans[0])
        fp.y = parseInt(ans[1])
    })
    makeMove(ip, fp)
}
console.log("Game over, final game state: "+gameState)