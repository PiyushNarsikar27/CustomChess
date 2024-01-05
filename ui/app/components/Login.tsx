"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { FormEvent, useState } from "react";
import { switchLoginModalVisibility, switchSignUpModalVisibility, clearSignUpSuccess } from "../reducers/homeStateSlice";
import { login } from "../reducers/loginStateSlice";
import LoginRequest from "../request-models/LoginRequest";
import LoginResponse from "../response-models/LoginResponse";
import encrypt from "../encrypt/encrypt";

export default function Login(){
    const dispatch = useAppDispatch();
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailedTechFailure, setLoginFailedTechFailure] = useState(false);
    const [loginFailedWrongCredentials, setLoginFailedWrongCredentials] = useState(false);
    const signupSuccess = useAppSelector((state)=>{{
        return state.homeState.signUpSuccess
    }})

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const requestBody: LoginRequest = {
      usernameOrEmail: usernameOrEmail,
      password:encrypt(password)
    }
    const loginResponse = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json",
          },
  });
    const responseBody: LoginResponse = await loginResponse.json()
    if((responseBody.token===null)){
        setLoginFailedTechFailure(true);
    }
    else if(responseBody.token==""){
      setLoginFailedWrongCredentials(true);
    }
    else{
    dispatch(login());
    dispatch(switchLoginModalVisibility());
    }
    dispatch(clearSignUpSuccess());
  };

  const handleClickSignUp = () => {
    dispatch(switchLoginModalVisibility());
    dispatch(switchSignUpModalVisibility());
  }

  const handleClickClose = ()=>{
    dispatch(switchLoginModalVisibility());
  }

  return (
    <div className="bg-white p-8 rounded-md">
        {signupSuccess && <div>Sign up successful, now please login</div>}
        {loginFailedTechFailure && <div>Somthing went wrong, login failed</div>}
        {loginFailedWrongCredentials && <div>Wrong login credentials entered</div>}
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username-or-email" className="block text-sm font-medium text-gray-600">
            Username or Email
          </label>
          <input
            type="text"
            id="username-or-email"
            name="username-or-email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            onChange={(e)=>{setUsernameOrEmail(e.target.value)}}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            onChange={(e)=>{setPassword(e.target.value)}}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-sm text-gray-600">
        Don't have an account?{' '}
        <div onClick = {handleClickSignUp} className="text-blue-500 hover:underline cursor-pointer">
          Sign up here
        </div>
        Forgot password?{' '}
        <div onClick = {handleClickSignUp} className="text-blue-500 hover:underline cursor-pointer">
          Reset password
        </div>
      </div>
      <button onClick={handleClickClose} className="mt-4 text-sm text-gray-600">
        Close
      </button>
    </div>
  );
};
