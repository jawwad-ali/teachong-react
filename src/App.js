import React, { Component } from 'react';
import Header from "./component/Header"
import Content from "./component/Content"
import Card from "./component/Card"
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Card />
        <Footer />
      </div>
    )
  }
}

export default App;