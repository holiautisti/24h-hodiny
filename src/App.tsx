import { useState } from 'react'
import './App.css'

/* 24-hour analog clock */
function App() {
  const [] = useState(new Date());

  return (
    <div className="App">
      <div className="icon">
        <svg width="300" height="300" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" stroke-width="0" fill="#3cbcd4" />
          <line
            className="clock-hours"
            x1="100"
            y1="100"
            x2="100"
            y2="25"
            stroke-width="7"
            stroke="#ffffff"
            stroke-linecap="round"
          />
          <line
            className="clock-minutes"
            x1="100"
            y1="100"
            x2="100"
            y2="20"
            stroke-width="5"
            stroke="#808080"
            stroke-linecap="round"
          />
          <line
            className="clock-seconds"
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
