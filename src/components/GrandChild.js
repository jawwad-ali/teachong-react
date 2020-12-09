import React from 'react'

function GrandChild(props) {
    return (
        <div>
            <h1>GrandChild Component</h1>
            <p>My gender is {props.gender}</p>
        </div>
    )
}

export default GrandChild
