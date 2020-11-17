import React from 'react';

export default function App() {

  // const age = 20.9
  // console.log(Math.floor(age))
  // console.log(Math.ceil(age))

  // const subj = ["urdu", "eng", "math", "isl"]

  // const random = Math.random() * 2
  // console.log(random)

  let toss = Math.random() * 2
  let xyz = Math.ceil(toss)
  console.log(xyz)

  if(xyz === 1){
    console.log("hamza won")
  }
  else{
    console.log("asfar won")
  }

  // if (toss === 0)
  //   return console.log("hamza won")

  // else {
  //   return console.log("asfar won")
  // }
  return (
    <div  >
      hello <br />
      {/* <ol>
        {
         subj.map((sub)=>{
           return(
           <li key={Math.random()}>{sub}</li>
           )
         }) 
        }
      </ol> */}

      {/* {
        toss === 2 ? "hamza won" : "asfar won"
      } */}
    </div>
  )
}