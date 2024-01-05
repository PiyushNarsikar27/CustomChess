"use client"

import { useAppDispatch } from "@/lib/hooks";
import { FormEvent, useState } from "react";
import { switchLoginModalVisibility, switchSignUpModalVisibility, setSignUpSuccess, clearSignUpSuccess } from "../reducers/homeStateSlice";
import SignUpRequest from "../request-models/SignUpRequest";
import encrypt from "../encrypt/encrypt";

export default function SignUp(){
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signUpFailedTechFailure, setSignUpFailedTechFailure] = useState(false);
    const [signUpFailedUserExists, setSignUpFailedUserExists] = useState(false);
    const [showUserNameInstructions, setShowUserNameInstructions] = useState(false);
    const [showPasswordInstructions, setShowPasswordInstructions] = useState(false);
    const [showInvalidEmailMsg, setShowInvalidEmailMsg] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validInput = !(showUserNameInstructions || showPasswordInstructions || showInvalidEmailMsg) && 
    !(username.length==0 || password.length==0 || email.length==0)
    if(!validInput){
      return;
    }
    const requestBody: SignUpRequest = {
      username: username,
      email:email,
      password:encrypt(password)
    }
    const signUpResponse = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json",
          },
  });
    if(signUpResponse.status==201){
        dispatch(setSignUpSuccess())
        dispatch(switchSignUpModalVisibility());
    dispatch(switchLoginModalVisibility());
    } else if (signUpResponse.status==200){
        setSignUpFailedUserExists(true);
    } else{
      setSignUpFailedTechFailure(true);
    }
}

  const handleClickLogin = () => {
    dispatch(switchSignUpModalVisibility());
    dispatch(switchLoginModalVisibility());
  }

  const handleClickClose = ()=>{
    dispatch(switchSignUpModalVisibility());
  }

  return (
    <div className="bg-white p-8 rounded-md">
        {signUpFailedTechFailure && <div>Something went wrong, sign up failed</div>}
        {signUpFailedUserExists && <div>The username or email is already taken, please retry with different username or email</div>}
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            onChange = {(e)=>{setUsername(e.target.value);
              const usernameRegex = /^[a-zA-Z0-9]{3,}$/
              setShowUserNameInstructions(!usernameRegex.test(e.target.value));}}
            required
          />
          {showUserNameInstructions && <div>Username should be at least 3 characters long and should contain only alphabets and numbers, no spaces and special characters are allowed</div>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            onChange = {(e)=>{setEmail(e.target.value);
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            setShowInvalidEmailMsg(!emailRegex.test(e.target.value))}}
            required
          />
           {showInvalidEmailMsg && <div>Please enter a valid email id</div>}
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
            onChange={(e)=>{setPassword(e.target.value);
              const passwordRegex = /^[^\s]{8,}$/
              setShowPasswordInstructions(!passwordRegex.test(e.target.value));}}
            required
          />
           {showPasswordInstructions && <div>Password should be at least 8 characters long and should not include spaces</div>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <div onClick = {handleClickLogin} className="text-blue-500 hover:underline cursor-pointer">
          Login here
        </div>
      </div>
      <button onClick={handleClickClose} className="mt-4 text-sm text-gray-600">
        Close
      </button>
    </div>
  );
};
