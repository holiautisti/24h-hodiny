import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Clock.jsx";

/* 24-hour analog clock */
function App() {
  // const [time, setTime] = useState(new Date());

  return (
    <div className="App">
      <Clock></Clock>
    </div>
  );
}

export default App;
