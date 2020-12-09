import React from 'react'
import GrandChild from "./GrandChild"

function Child({ id, image, name, price, button }) {
    return (
        <div>
            <h1>Child Component</h1>
            {/* <p>My name is {props.name}</p>
            <p>My age is {props.age}</p>

        <GrandChild gender={props.gender} /> */}

            <h4>{name}</h4>
            <img src={image} />
            <p>Price: <em>Rs{price}</em> </p>
            <button>{button}</button>
        </div>
     )
}
    
export default Child
