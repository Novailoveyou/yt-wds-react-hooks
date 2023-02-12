import { useState } from 'react'
import Container from './Container'

const heading = 'useState'

export const ComponentUseState = () => {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('dark')

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  const toggleTheme = () => {
    setTheme(prevTheme => {
      return prevTheme === 'dark' ? 'light' : 'dark'
    })
  }

  return (
    <Container heading={heading}>
      <div
        style={{
          backgroundColor: theme === 'dark' ? 'black' : 'white',
          color: theme === 'dark' ? 'white' : 'black'
        }}>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        <span>{theme}</span>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    </Container>
  )
}

export default ComponentUseState
