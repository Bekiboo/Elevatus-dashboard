'use client'

import { useState } from 'react'
import { Square } from './Square'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i: number) {
    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <div className="flex flex-col mx-auto w-min mt-8">
      <div className="flex">
        <Square value={squares[0]} onSquareclick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareclick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareclick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareclick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareclick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareclick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareclick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareclick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareclick={() => handleClick(8)} />
      </div>
    </div>
  )
}
