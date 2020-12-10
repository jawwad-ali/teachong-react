import React, { useContext, useState } from 'react';
import { MyContext } from "./AppContext"
import Child from "./components/Child"

export default function App() {

  export const Consume_Context = useContext(MyContext)
  // console.log(Consume_Context)

  let [state, setState] = useState(Consume_Context)

  return (
    <div className="data-container">
      <h1>Context API</h1>
      <button onClick={() => setState(++state)}>
        Increment
      </button>

      <h4>{state}</h4>

      <h1>Decrement Compp</h1>
      <Child />
    </div>
  )
}