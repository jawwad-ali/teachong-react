import React, { useState, useEffect } from 'react';

export default function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function ApiCall() {
      setLoading(true)

      const api = await fetch("https://jsonplaceholder.typicode.com/todos/1")

      const response = await api.json()

      console.log(response)
      setLoading(false)

    }
    ApiCall()
  } , [] )



  if (loading)
    return <h4>Loading.....</h4>

  return (
    <div>
      <h4>Promises</h4>
    </div>
  )
}
