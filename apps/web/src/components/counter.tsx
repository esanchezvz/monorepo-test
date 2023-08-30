'use client'

import { Button } from '@form/ui'
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Button onClick={handleClick}>Click Me!</Button>
      <p>You&apos;ve clicked the button {count} times.</p>
    </>
  )
}
