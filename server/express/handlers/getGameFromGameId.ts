import { Db } from "mongodb";

export default async function getGameFromGameId(gameId:string, db:Db): Promise<GameSchema>{
    const games = db.collection<GameSchema>("games")
    const query = {gameId:"1"}
    const gameFromDB = await games.findOne(query)
    const game:GameSchema = {moves:[]}
    for (const move of gameFromDB.moves){
        game.moves.push(move)
    }
    return game
}