export function Board() {
  const renderSquares = () => {
    const squares = []

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isEvenSquare = (row + col) % 2 === 0
        const squareColor = isEvenSquare ? "bg-gray-300" : "bg-gray-700"

        squares.push(
          <div
            key={`${row}-${col}`}
            className={`w-full h-full ${squareColor}`}
          ></div>
        )
      }
    }

    return squares
  }
  return (
    <div className="grid grid-cols-8 grid-rows-8 w-96 h-96">
      {renderSquares()}
    </div>
  )
}
