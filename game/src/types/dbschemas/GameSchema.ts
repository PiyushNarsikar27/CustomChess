import Position from "../Position";

type GameSchema = {
    moves: Move[]
}

type Move = {
    initialPosition: Position;
    finalPosition: Position;
}

export default GameSchema