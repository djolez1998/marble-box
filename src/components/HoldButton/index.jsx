import React, { useRef } from 'react'

const HoldButton = ({ onClick, title }) => {
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  const handleMouseDown = () => {
    onClick()

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        onClick()
      }, 100)
    }, 500)
  }

  const handleMouseUpOrLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  return (
    <div>
      <button
        onMouseDown={() => handleMouseDown()}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {title}
      </button>
    </div>
  )
}

export default HoldButton
