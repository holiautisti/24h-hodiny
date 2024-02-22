import { useState } from "react";
import "./App.css";
import Clock from "./Clock.tsx";

/* 24-hour analog clock */
function App() {
  // get the current time
  const [time, setTime] = useState(new Date());

  // update the time every second
  // this is a side effect, so it goes in a useEffect

  return (
    <div className="App">
      <Clock></Clock>
    </div>
  );
}

export default App;
