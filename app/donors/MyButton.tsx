import { useState } from 'react'

export function MyButton({ count, onClick }) {
  return <button onClick={onClick}>I&apos;m a {count}</button>
}
