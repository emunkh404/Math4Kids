import React from 'react'

export default function GameTimer({timer}) {
  return (
    <>
      <p>Time left: {Math.max(timer, 0)} seconds</p>
    </>
  )
}
