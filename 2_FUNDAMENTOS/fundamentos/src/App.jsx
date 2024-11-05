import { useState } from 'react'
import './App.css'

import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpression />
      <Events />
    </>
  )
}

export default App
