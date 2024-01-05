import { createSlice } from "@reduxjs/toolkit";

interface HomeState {
  isSignUpModalOpen: boolean;
  isLoginModalOpen: boolean;
  signUpSuccess: boolean;
}

const initialState: HomeState = {
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  signUpSuccess: false
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
            isSignUpModalOpen:!(prevState.isSignUpModalOpen),
            signUpSuccess:prevState.signUpSuccess
        }
      },
      switchLoginModalVisibility: (
        prevState,
      ): HomeState => {
          return {
              isLoginModalOpen:!(prevState.isLoginModalOpen),
              isSignUpModalOpen:prevState.isSignUpModalOpen,
              signUpSuccess:prevState.signUpSuccess
          }
        },  
        setSignUpSuccess:(prevState): HomeState =>{
            return {
                isLoginModalOpen:prevState.isLoginModalOpen,
                isSignUpModalOpen:prevState.isSignUpModalOpen,
                signUpSuccess:true
            }
        },
        clearSignUpSuccess:(prevState): HomeState =>{
          return {
              isLoginModalOpen:prevState.isLoginModalOpen,
              isSignUpModalOpen:prevState.isSignUpModalOpen,
              signUpSuccess:false
          }
      }
    }
});

export const { switchLoginModalVisibility, switchSignUpModalVisibility, setSignUpSuccess, clearSignUpSuccess } = homeStateSlice.actions;
export default homeStateSlice.reducer;
