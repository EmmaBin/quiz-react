import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Welcome from './components/Welcome'
// import Quiz from './components/Quiz'

function App() {
  

  return (
    <div className="App">
      <Welcome />
      {/* if clicked, display quiz component */}
    </div>
  )
}

export default App
