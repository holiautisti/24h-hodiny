import { useState } from 'react'
import './App.css'
import Clock from './Clock.tsx'

/* 24-hour analog clock */
function App() {
  // get the current time
  const [] = useState(new Date());

  return (
    <div className="App">
      <Clock></Clock>
    </div>
  )
}

export default App;
