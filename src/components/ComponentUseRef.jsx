import { useState, useRef, useEffect } from 'react'
import Container from './Container'

const heading = 'useRef'
const defaultName = ''

export const ComponentUseRef = () => {
  const [name, setName] = useState(defaultName)
  const renderCount = useRef(0)
  const inputRef = useRef()
  const prevName = useRef('')

  const handleFocus = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    // renderCount.current = renderCount.current + 1
    prevName.current = name
  }, [name])

  return (
    <Container heading={heading}>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value.toString())}
        ref={inputRef}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={handleFocus}>Focus</button>
    </Container>
  )
}

export default ComponentUseRef
