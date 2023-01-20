import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'

function App() {
  const [display, setDisplay] = useState(true)

  function handleClick(){
    setDisplay(prev => !prev)
  }

  return (
    <div className="App">
      {display ? <Welcome handleClick={handleClick}/> :  <Quiz />}
      
      
      
    </div>
  )
}

export default App
