"use client"

// import SignUp from './SignUp';
// import Login from './Login';
import Modal from 'react-modal'
import { Board } from './game/components/Board';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useDispatch } from 'react-redux';
import { switchLoginModalVisibility, switchSignUpModalVisibility } from './reducers/homeStateSlice';
import SignUp from './components/SignUp';
import Login from './components/Login';

export default function Home() {
  const {isLoginModalOpen, isSignUpModalOpen} = useAppSelector((state)=>{
    return state.homeState
  })
  const dispatch = useAppDispatch();
  const handleSignUpClick = ()=>{
    dispatch(switchSignUpModalVisibility())
  }
  const handleLoginClick = ()=>{
    dispatch(switchLoginModalVisibility());
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Play Chess Online on the #1 Site!</h1>
        <Image src='./game/resources/bishop-b.svg' width={100} height={100} alt={'ChessBoard'}/>
        <div className="space-x-4">
          <button
            onClick={handleSignUpClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
          <button
            onClick={handleLoginClick}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Login
          </button>
        </div>
      </div>
      <Modal
        isOpen={isSignUpModalOpen}
        onRequestClose={handleSignUpClick}
        contentLabel="SignUp Modal"
      >
        <SignUp/>
      </Modal>

      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={handleLoginClick}
        contentLabel="Login Modal"
      >
        <Login/>
      </Modal>
    </div>
  );
}
