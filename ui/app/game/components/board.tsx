"using client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchInitialState, movePiece, updateMoveInput } from "../reducers/gameStateSliceReducer";
import { Piece } from "./Piece";
import { useEffect, useMemo } from "react";
import { connectToWSServer } from "@/app/client/websocketClient";
import Position from "../../../../game/src/types/Position";
import isMoveLegal from "../../../../game/src/utils/isMoveLegal";

export function Board(props:{gameId:string}) {
  const dispatch = useAppDispatch();
  // useEffect(()=>{
  //   ws.onmessage = (event)=>{
  //     dispatch(movePiece(event.data));
  //   }
  // })
  useEffect(() => {
    dispatch(fetchInitialState(props.gameId));
  }, [dispatch, props.gameId]);
  const gameState = useAppSelector((state) => state.gameState);
  const handleSquareClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const clickedSquare = (e.target as HTMLElement).id;
    if(gameState.moveInput.initialSquare!="" && gameState.moveInput.finalSquare==""){
      const initialPosition = new Position(parseInt(gameState.moveInput.initialSquare[0]), parseInt(gameState.moveInput.initialSquare[1]))
      const finalPosition = new Position(parseInt(clickedSquare[0]), parseInt(clickedSquare[1]))
      // if(isMoveLegal(gameState.game, initialPosition, finalPosition)){
      //   ws.send(JSON.stringify({
      //     initialPosition: initialPosition,
      //     finalPosition:finalPosition,
      //     gameId: props.gameId
      //   }))
      // }
    }
    dispatch(updateMoveInput(clickedSquare));
  }
  const renderSquares = () => {
    const squares: JSX.Element[] = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isEvenSquare = (row + col) % 2 === 0;
        const piece = gameState.game.board[col][Math.abs(row - 7)];
        const squareColor = isEvenSquare ? "bg-blue-300" : "bg-green-700";
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
