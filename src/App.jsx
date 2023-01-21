import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'

function App() {
  const [displayWelcome, setDisplay] = useState(true)

  function handleClick(){
    setDisplay(false)
  }

  return (
    <div className="App">
      {/* conditional rendering different components */}
      {displayWelcome ? <Welcome handleClick={handleClick}/> :  <Quiz />}
    </div>
  )
}

export default App
