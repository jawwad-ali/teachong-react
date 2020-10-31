import React from 'react'
import "./Card.css"
import cardImg from "./images/employee.jpg"

function Card() {
    return (
        <div className="container card-container">
            <div className="text-center">
                <h2>My Hard Working Clients</h2>
            </div>
            <div className="row">

                <div className="col-lg-6">
                    <div className="card">
                        <img className="card-img-top" src={cardImg} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Hamza</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <img className="card-img-top" src={cardImg} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Hamza</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <img className="card-img-top" src={cardImg} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Hamza</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <img className="card-img-top" src={cardImg} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Hamza</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
