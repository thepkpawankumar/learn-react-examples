import React from 'react'
import { useState } from "react";

export const useCounter = () => {

    const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => {setCount(count+1)}}>Click Me</button>
      <p>Count {count}</p>
    </>

  );
}
