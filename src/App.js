import React, { useState, useEffect } from 'react';
import "./App.css"

export default function App() {

  const [loading, setLoading] = useState(false)
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [street, setStreet] = useState([])


  useEffect(() => {

    async function ApiCall() {

      setLoading(true)

      const api = await fetch("https://jsonplaceholder.typicode.com/users/1")
      const { name, email, address: { street } } = await api.json()
      console.log(name)
      console.log(email)
      console.log(street)

      setName(name)
      setEmail(email)
      setStreet(street)
      // setData(email)

      // const { address } = await api.json()

      // console.log(address)
      // setData(address)

      setLoading(false)

    }
    ApiCall()
  }, [])

  if (loading)
    return <h4>Loading.....</h4>

  return (
    <div className="data-container">
      {name} <br />
      {email} <br />
      {street}  <br />
    </div>

  )
}