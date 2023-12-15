"using client"

import Image from 'next/image'
import PieceType from '../../../../game/src/types/PieceType'
import Color from '../../../../game/src/types/Color'
import { pieceMap } from '../constants/pieceMap'

export function Piece(props:{pieceTye: PieceType, pieceColor: Color}){
    const mapKey  = props.pieceColor + props.pieceTye
    return (
        <div><Image src={pieceMap.get(mapKey)!} width={30} height={30} alt={mapKey}/></div>
    )
}