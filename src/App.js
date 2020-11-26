import React, { useState, useEffect } from 'react';
import "./App.css"

export default function App() {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    async function ApiCall() {
      setLoading(true)

      const api = await fetch("https://jsonplaceholder.typicode.com/users")

      const response = await api.json()

      console.log(response)
      setData(response)
      setLoading(false)

    }
    ApiCall()
  }, [])



  if (loading)
    return <h4>Loading.....</h4>

  return (
    <div className="data-container">
      {
        data.map((collect) => (
          <div className="data">
            <span><strong>Name</strong></span><p>{collect.name}</p>
            <span><strong>Phone</strong></span><p>{collect.phone}</p>
            <span><strong>Username</strong></span><p>{collect.username}</p>
          </div>
        ))
      }
    </div>

  )
}
