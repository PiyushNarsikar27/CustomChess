"using client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchInitialState, updateMoveInput } from "../reducers/gameStateSliceReducer";
import { Piece } from "./piece";
import { useEffect, useMemo } from "react";
import { connectToWSServer } from "@/app/client/websocketClient";

export function Board(props:{gameId:string}) {
  let ws=useMemo(connectToWSServer, [])
  const dispatch = useAppDispatch();
  useEffect(()=>{
    ws.onmessage = (event)=>{
      dispatch(updateMoveInput(event.data as string));
    }
  })
  useEffect(() => {
    dispatch(fetchInitialState(props.gameId));
  }, [dispatch, props.gameId]);
  const gameState = useAppSelector((state) => state.gameState);
  const handleSquareClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const clickedSquare = (e.target as HTMLElement).id;
    ws.send(clickedSquare)
    dispatch(updateMoveInput(clickedSquare));
  }
  const renderSquares = () => {
    const squares: JSX.Element[] = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isEvenSquare = (row + col) % 2 === 0;
        const piece = gameState.game.board[col][Math.abs(row - 7)];
        const squareColor = isEvenSquare ? "bg-gray-300" : "bg-gray-700";
        squares.push(
          <div
            id={`${col}${Math.abs(row - 7)}`}
            key={`${col}${Math.abs(row - 7)}`}
            className={`w-full h-full ${squareColor}`}
            onClick={(event) => {
              handleSquareClick(event);
            }}
          >
            {piece && (
              <Piece
                pieceColor={piece.getColor()}
                pieceTye={piece.getPieceType()}
              />
            )}
          </div>
        );
      }
    }
    return squares;
  };
  return (
    <div className="grid grid-cols-8 grid-rows-8 w-96 h-96">
      {renderSquares()}
    </div>
  );
}
