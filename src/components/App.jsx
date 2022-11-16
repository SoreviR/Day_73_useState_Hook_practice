import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [nowTime, setTime] = useState(time);
  console.log(setTime);

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{nowTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
