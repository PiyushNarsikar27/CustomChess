import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import Game from "../../../../game/src/types/Game";
import makeMove from "../../../../game/src/utils/makeMove";
import Position from "../../../../game/src/types/Position";

interface GameState {
  moveInput: {
    initialSquare: string;
    finalSquare: string;
  };
  game: Game;
}

const initialState: GameState = {
  moveInput: { initialSquare: "", finalSquare: "" },
  game: new Game(),
};
export const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    updateMoveInput: (
      prevState,
      clickedSquare: PayloadAction<string>
    ): GameState => {
      if (prevState.moveInput.initialSquare == "") {
        const x = {
          moveInput: {
            ...prevState.moveInput,
            initialSquare: clickedSquare.payload,
          },
          game: prevState.game as Game,
        };
        return x;
      } else if (prevState.moveInput.finalSquare == "") {
        const initialPostion = new Position(
          parseInt(prevState.moveInput.initialSquare[0]),
          parseInt(prevState.moveInput.initialSquare[1])
        );
        const finalPosition = new Position(
          parseInt(clickedSquare.payload[0]),
          parseInt(clickedSquare.payload[1])
        );
        const newGame = makeMove(
          prevState.game as Game,
          initialPostion,
          finalPosition
        );
        const x = {
          moveInput: {
            ...prevState.moveInput,
            finalSquare: clickedSquare.payload,
          },
          game: newGame,
        };
        console.log(x === prevState);
        return x;
      } else {
        const x = {
          moveInput: { initialSquare: clickedSquare.payload, finalSquare: "" },
          game: prevState.game as Game,
        };
        return x;
      }
    },
  },
});

export const { updateMoveInput } = gameStateSlice.actions;
export default gameStateSlice.reducer;
