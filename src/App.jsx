import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Getstarted from './Components/Getstarted'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Getstarted/>
    </>
  )
}

export default App
