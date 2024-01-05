import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoggedIn: false
};

export const loginStateSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    login: (): LoginState => {
        return {
            isLoggedIn:true
        }
      },
      logout: (): LoginState => {
          return {
              isLoggedIn:false
          }
        }  
    }
});

export const { login, logout } = loginStateSlice.actions;
export default loginStateSlice.reducer;
