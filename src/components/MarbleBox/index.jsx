import React, { useCallback } from 'react'
import HoldButton from '../HoldButton'
import './MarbleBox.css'

const MarbleBox = ({ data, handleUpdateMarbleBox, onDeleteMarbleBox }) => {
  const handleIncrementMarbleBox = useCallback(() => {
    handleUpdateMarbleBox(data.id, 1)
  }, [data, handleUpdateMarbleBox])

  const handleDecrementMarbleBox = useCallback(() => {
    handleUpdateMarbleBox(data.id, -1)
  }, [data, handleUpdateMarbleBox])

  const handleDeleteMarbleBox = useCallback(() => {
    onDeleteMarbleBox(data.id)
  }, [data.id, onDeleteMarbleBox])

  return (
    <div className="marble-box">
      <HoldButton onClick={handleDecrementMarbleBox} title={'-'} />
      <div className="marble-value">{data.value}</div>
      <HoldButton onClick={handleIncrementMarbleBox} title={'+'} />

      <button onClick={handleDeleteMarbleBox}>
        <img
          alt="delete-icon"
          width={24}
          height={24}
          src="https://cdn-icons-png.flaticon.com/128/542/542724.png"
        />
      </button>
    </div>
  )
}

export default MarbleBox
