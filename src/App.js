import React, { useState } from 'react';
import "./App.css"

// REST OPERATORS
// function add(num1, num2, ...num3) {
//   // var ans = num1 + num2 + num3
//   console.log(5, 10, 35, 5, 45, 95, 11, 22, 910)
// }

export default function App() {

  const [defaultVal, setVal] = useState(0)

  return (
    <div>
      <h3>
        {defaultVal}
      </h3>
      <button onClick={() => setVal(defaultVal + 1)}>
        Inc
      </button>
      <button onClick={() => setVal(defaultVal-1)}>
        Dec
      </button>
    </div>
  )
}