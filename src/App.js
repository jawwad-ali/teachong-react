import React, { Component } from 'react';

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
        <p>THis is sentence</p>
        <button onClick={myFun(10 , 2)} >Click here</button>
      </div>
    )
  }
}

export default App;