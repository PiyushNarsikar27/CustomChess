"use client"

import { useRouter } from 'next/navigation';

const generateRandomGameId = () => {
  return Math.random().toString(36).substring(2, 10);
};

export default function CreateGame() {
  const router = useRouter();
  const handleCreateGame = () => {
    const newGameId = generateRandomGameId();
    router.push(`/game/${newGameId}`)
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Create a Game</h1>
        <button
          onClick={handleCreateGame}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Create Game
        </button>
      </div>
    </div>
  );
};
