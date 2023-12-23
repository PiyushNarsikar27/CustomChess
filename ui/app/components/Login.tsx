import { useAppDispatch } from "@/lib/hooks";
import { FormEvent } from "react";
import { switchLoginModalVisibility, switchSignUpModalVisibility } from "../reducers/homeStateSlice";

export default function Login(){
    const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
