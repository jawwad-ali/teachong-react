import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div>
            <header>
                <div className="container-fluid px-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <a className="website-logo" href="#">My first React Website</a>
                        </div>
                        <div className="col-lg-6 navbar-links">
                            <ul className="navbar-links-ul">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
