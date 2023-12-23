"use client"

import { Board } from "../components/Board"

export default function GameComponent({ params }: { params: { gameId: string } }) {
  return (
    <div className="App p-4 w-100 h-100 flex items-center justify-center min-h-screen">
      <Board {...params}/>
    </div>
  )
}
