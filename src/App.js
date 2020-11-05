import React, { Component } from 'react';
// import Header from "./component/Header"
// import Content from "./component/Content"
// import Card from "./component/Card"
// import Footer from './component/Footer';

// let arr = ["ali", "asad" , "cricket" , "biryani"]
// let [myname, friend, fsport] = arr
// let [myname, , ,  fdish] = arr

// SPREAD OPERATOR
// let basic = ["ali", "19"]
// let prgrmng = ["html", "css", "js" , "react"]

// let merge = [basic, ...prgrmng]

let obj = {
  username : "Micheal",
  website : "micheal.com"
}

let {username , website} = obj

class App extends Component {


  render() {
    return (
      <div>
        {/* <Header />
        <Content />
        <Card />
        <Footer /> */}
        {/* 
        <h4>{myname}</h4>
        <h4>{friend}</h4>
        <h4>{fsport}</h4> */}

        {/* <h4> {myname}</h4>
        <h4> {fdish}</h4> */}
        {/* <h4>{merge}</h4> */}
        {username}
        {website}
      </div>
    )
  }
}

export default App;