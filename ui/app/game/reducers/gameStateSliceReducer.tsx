import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import Game from "../../../../game/src/types/Game";
import makeMove from "../../../../game/src/utils/makeMove";
import Position from "../../../../game/src/types/Position";
import GameSchema from "../../../../game/src/types/dbschemas/GameSchema"

interface GameState {
  moveInput: {
    initialSquare: string;
    finalSquare: string;
  };
  game: Game;
}

export const fetchInitialState = createAsyncThunk(
  'gameState/fetchInitialState',
  async (gameId:string, { getState, rejectWithValue }):Promise<Game> => {
      const response = await fetch(`http://localhost:8000/game/${gameId}`);
      const gameFromDB:GameSchema = await response.json();
      const moveList = gameFromDB.moves;
      let game = new Game()
      for(const move of moveList){
        game = makeMove(game, move.initialPosition, move.finalPosition)
      }
      return game;
  }
);

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
        return {
          moveInput: {
            ...prevState.moveInput,
            initialSquare: clickedSquare.payload,
          },
          game: prevState.game as Game,
        };
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
        return {
          moveInput: {
            ...prevState.moveInput,
            finalSquare: clickedSquare.payload,
          },
          game: newGame,
        };
      } else {
        return {
          moveInput: { initialSquare: clickedSquare.payload, finalSquare: "" },
          game: prevState.game as Game,
        };
      }
    },
    movePiece: (prevState, move: PayloadAction<string>): GameState => {
      const {initialPosition, finalPosition} = JSON.parse(move.payload)
      const newGame = makeMove(
        prevState.game as Game,
        initialPosition,
        finalPosition
      );
      return {
        moveInput: {
          initialSquare: initialPosition,
          finalSquare: finalPosition,
        },
        game: newGame,
      };
    }
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchInitialState.pending, (state) => {
      //   state.loading = true;
      // })
      .addCase(fetchInitialState.fulfilled, (state, action) => {
        // state.loading = false;
        state.game = action.payload;
      })
      // .addCase(fetchInitialState.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // });
  },
});

export const { updateMoveInput, movePiece } = gameStateSlice.actions;
export default gameStateSlice.reducer;
