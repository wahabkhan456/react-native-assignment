import React, {useState} from 'react'
import SelectableNumbers from 'app/components/selectablenumbers'

const App = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [selectedLineNumber, setSelectedLineNumber] = useState(null)
  const [selectedNumber, setSelectedNumber] = useState(null)

  const _handleNumberSelectionFromParent = (number, lineNo) => {
    setSelectedLineNumber(lineNo)
    setSelectedNumber(number)
    setIsSelected(true)
  }

  return (
    <SelectableNumbers
      isSelected={isSelected}
      selectedLineNumber={selectedLineNumber}
      selectedNumber={selectedNumber}
      onSelectNumber={_handleNumberSelectionFromParent}
    />
  )
}

export default App
