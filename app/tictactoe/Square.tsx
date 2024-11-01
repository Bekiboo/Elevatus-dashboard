'use client'
export function Square({
  value,
  onSquareclick,
}: {
  value: string
  onSquareclick: () => void
}) {
  return (
    <button className="w-8 h-8 outline" onClick={onSquareclick}>
      {value}
    </button>
  )
}
