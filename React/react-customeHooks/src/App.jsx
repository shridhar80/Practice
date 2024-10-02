import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeCounter from './comp3'
import RatingCountr from './comp2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LikeCounter/>

    <hr />

    <RatingCountr/>
     
    </>
  )
}

export default App
