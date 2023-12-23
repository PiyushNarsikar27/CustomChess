import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface HomeState {
  isSignUpModalOpen: boolean;
  isLoginModalOpen: boolean;
}

const initialState: HomeState = {
  isLoginModalOpen: false,
  isSignUpModalOpen: false
};

export const homeStateSlice = createSlice({
  name: "homeState",
  initialState,
  reducers: {
    switchSignUpModalVisibility: (
      prevState,
    ): HomeState => {
        return {
            isLoginModalOpen:prevState.isLoginModalOpen,
            isSignUpModalOpen:!(prevState.isSignUpModalOpen)
        }
      },
      switchLoginModalVisibility: (
        prevState,
      ): HomeState => {
          return {
              isLoginModalOpen:!(prevState.isLoginModalOpen),
              isSignUpModalOpen:prevState.isSignUpModalOpen
          }
        }  
    }
});

export const { switchLoginModalVisibility, switchSignUpModalVisibility } = homeStateSlice.actions;
export default homeStateSlice.reducer;
