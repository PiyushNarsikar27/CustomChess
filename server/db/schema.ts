type GameSchema = {
    moves: Move[]
}

type Move = {
    initialPosition: Position;
    finalPosition: Position;
}

type Position = {
    x:string;
    y:string;
}