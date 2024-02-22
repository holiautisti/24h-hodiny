import { useState } from 'react'
import './App.css'

/* 24-hour analog clock */
function App() {
  const [time] = useState(new Date());

  return (
    <div className="App">
      <div className="icon">
        <svg width="300" height="300" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" stroke-width="0" fill="#3cbcd4" />
          <line
            className="clock-big"
            x1="100"
            y1="100"
            x2="100"
            y2="5"
            stroke-width="3"
            stroke="#ff8080"
            stroke-linecap="round"
          />
          <circle cx="100" cy="100" r="10" stroke-width="0" fill="#ffffff" />
        </svg>
      </div>
    </div>
  )
}

export default App
