import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from "./component/Header"

class App extends Component {
  constructor() {
    super()
    // this.state = {
    //   title: "Learn react",
    //   version: "0.0.1"
    // }

    // function MyFunction () {
    //   alert("hello")
    // }
    // MyFunction()
  }


  render() {
    const myFun = (num1, num2) => {
      const add = num1 + num2
      console.log(add)
    }
    myFun()
    return (
      <div>
        <Header />

        <p>THis is sentence</p>
        <button onClick={myFun(10, 2)} >Click here</button>

        <Footer />
      </div>
    )
  }
}

export default App;