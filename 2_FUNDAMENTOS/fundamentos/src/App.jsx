import { useState } from 'react'
import './App.css'

import FirstComponent from './components/FirstComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
    </>
  )
}

export default App
