"use client"

import { Board } from "../components/board"

export default function GameComponent() {
  return (
    <div className="App p-4 w-100 h-100 flex items-center justify-center min-h-screen">
      <Board />
    </div>
  )
}
