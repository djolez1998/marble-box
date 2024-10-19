import React, { useState } from 'react'
import MarbleBox from '../MarbleBox'
import './MarbleBoxes.css'

const MarbleBoxes = () => {
  const [marbleBoxes, setMarbleBoxes] = useState([])

  const handleAddMarbleBox = () => {
    setMarbleBoxes([
      ...marbleBoxes,
      { value: 0, id: window.crypto.randomUUID() }
    ])
  }

  const handleUpdateMarbleBox = (updatedMarbleBoxId, increment) => {
    setMarbleBoxes((prevValue) =>
      prevValue.map((marbleBox) =>
        marbleBox.id === updatedMarbleBoxId
          ? { ...marbleBox, value: marbleBox.value + increment }
          : marbleBox
      )
    )
  }

  const onDeleteMarbleBox = (marbleBoxId) => {
    const newMarbleBoxes = marbleBoxes.filter(
      (marbleBox) => marbleBox.id !== marbleBoxId
    )

    setMarbleBoxes(newMarbleBoxes)
  }

  const marbleBoxesCounter = marbleBoxes.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.value
  }, 0)

  return (
    <div className="marble-boxes-container">
      <div className="marble-boxes-header">
        <div className="marble-boxes-header-title">
          Boxes count: <span>{marbleBoxes.length}</span>
        </div>
        <div className="marble-boxes-header-title">
          Marbles count: <span>{marbleBoxesCounter}</span>
        </div>
        <button className="add-button" onClick={handleAddMarbleBox}>
          ADD NEW BOX
        </button>
      </div>
      <div className="marble-box-list">
        {marbleBoxes.length ? (
          marbleBoxes.map((marbleBox) => (
            <MarbleBox
              handleUpdateMarbleBox={handleUpdateMarbleBox}
              onDeleteMarbleBox={onDeleteMarbleBox}
              key={marbleBox.id}
              data={marbleBox}
            />
          ))
        ) : (
          <div className="no-boxes-message">No marble boxes, yet</div>
        )}
      </div>
    </div>
  )
}

export default MarbleBoxes
