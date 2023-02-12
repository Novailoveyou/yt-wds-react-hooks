import { useState, useEffect } from 'react'
import Container from './Container'

const heading = 'useEffect'
const defaultResource = 'posts'
const defaultItems = []

export const ComponentUseEffect = () => {
  const [resource, setResource] = useState(defaultResource)
  const [items, setItems] = useState(defaultItems)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resource])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container heading={heading}>
      <button onClick={() => setResource('posts')}>Posts</button>
      <button onClick={() => setResource('users')}>Users</button>
      <button onClick={() => setResource('comments')}>Comments</button>
      <span>{resource}</span>
      {windowWidth}
      {items.map((item, idx) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
      })}
    </Container>
  )
}

export default ComponentUseEffect
