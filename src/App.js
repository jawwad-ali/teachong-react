import React, { Component } from 'react';
// import Footer from './component/Footer';
import Header from "./component/Header"
import Content from "./component/Content"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;