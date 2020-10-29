import React from 'react'
import "./Content.css"
import logo from "../logo.svg"

function Content() {
    return (
        <div className="container content-div">
            <div className="row">
                <div className="col-lg-6 heading-div">
                    <h1>
                        My Experience with React JS
                    </h1>
                </div>
                <div className="col-lg-6 img-div">
                    <div className="img-render">
                        <img src={logo} alt="website header " />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
