import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">React JS</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item text-muted text-uppercase">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item text-muted text-uppercase ">
                                <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item dropdown text-uppercase">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item text-uppercase" href="#">Action</a>
                                    <a className="dropdown-item text-uppercase" href="#">Another action</a>
                                    <div className="dropdown-divider text-uppercase"></div>
                                    <a className="dropdown-item text-uppercase" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item text-muted text-uppercase">
                                <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </header>
        </div>
    )
}
