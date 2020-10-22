import React, { Component } from 'react';

class App extends Component {
  // constructor() {
  //   super()

  //   let biodata = {
  //     name: "Hamza",
  //     age: 18,
  //     school: "XYZ school",
  //     married: false,
  //     favouriteColor: "red",
  //     favdish: [
  //       "BBQ",
  //       "biryani",
  //       "sabzi",
  //       "lassi"
  //     ]
  //   }
  //   console.log(biodata.favdish[2])
  // }
  constructor() {
    super()
    this.state = {
      title: "Learn react",
      version: "0.0.1"
    }
  }
  render() {

    return (
      <div>
        <p>THis is sentence</p>
        <h1>{this.state.title}</h1>
        <p> Version: {this.state.version} </p>
      </div>
    )
  }
}

export default App;
// JSX