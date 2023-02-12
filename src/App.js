import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  let a = 0
  console.log('render 1')
  useEffect(() => {
    console.log('render 2')
  }, [])

  return (
    <div>
      <button onClick={() => a + 1}>+</button>
      <p>Counter: {a}</p>
    </div>
  )
}

export default App
