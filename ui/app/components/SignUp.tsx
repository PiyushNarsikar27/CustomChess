import { useAppDispatch } from "@/lib/hooks";
import { FormEvent } from "react";
import { switchLoginModalVisibility, switchSignUpModalVisibility } from "../reducers/homeStateSlice";

export default function SignUp(){
    const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleClickLogin = () => {
    dispatch(switchSignUpModalVisibility());
    dispatch(switchLoginModalVisibility());
  }

  const handleClickClose = ()=>{
    dispatch(switchSignUpModalVisibility());
  }

  return (
    <div className="bg-white p-8 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
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
