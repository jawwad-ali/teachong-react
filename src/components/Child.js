import React, { useContext, useState } from 'react'
import GrandChild from "./GrandChild"
import { MyContext } from "../AppContext"


function Child() {

    let Dec_Context = useContext(MyContext)

    let [dec, setDec] = useState(Dec_Context)

    return (
        <div>
            <button onClick={() => setDec(--dec)}>
                Decrement
            </button>

            <h6>State from  Dec Comp</h6>
            {dec}

        </div>
    )
}

export default Child
