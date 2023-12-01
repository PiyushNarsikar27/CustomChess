import Position from "../types/Position";

const boardSize = 8
export default function validCoordinates(position: Position): boolean{
    if(position.x>boardSize-1 || position.x<0 || position.y>boardSize-1 || position.y<0){
        return false
    }
    return true
}