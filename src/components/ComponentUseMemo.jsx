import { useState, useMemo, useEffect } from 'react'
import Container from './Container'

const heading = 'useMemo'
const numberDefault = 0
const themeDefault = false

export const ComponentUseMemo = () => {
  const [number, setNumber] = useState(numberDefault)
  const [dark, setDark] = useState(themeDefault)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])

  return (
    <Container heading={heading}>
      <input
        type='number'
        value={number}
        onChange={e => setNumber(parseFloat(e.target.value))}
      />
      <button onClick={() => setDark(prevState => !prevState)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </Container>
  )
}

export default ComponentUseMemo

function slowFunction(num) {
  console.log('Calling slow function...')
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
}
