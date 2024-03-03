import { useState } from "react";
function App() {

  const [count, setCount] = useState(0);

  /**
   * Using const with useState will not work in case of count++ or ++count
   * 
   */
  return (
    <div className="App">
     
     <button onClick={() => {setCount(++count)}}>Click Me</button>
     <p>Count {count}</p>
    </div>
  );
}

export default App;
