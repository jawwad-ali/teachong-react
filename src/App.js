import React, { useState } from 'react';

export default function App() {

  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [gender , setgender] = useState()

  const handleSubmit = () => {
    alert(email)
    alert(pass)
    alert(gender)

    setemail("")
    setpass("")
    setgender()
  }

  return (
    <div className="container mt-5" >
      <div className="text-center mt-2">
        <h1>HANDLING FORMS WITH REACT</h1>
      </div>

      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" className="form-control mb-2" onChange={e => setemail(e.target.value)} />
            <input type="password" className="form-control mb-2" placeholder="Password" onChange={e => setpass(e.target.value)} />
            

            <select onChange={e => setgender(e.target.value)}>
              <option>Male</option>
              <option>Female</option>
            </select>
            <br /> <br />

            <input type="submit" value="Login" className="btn btn-success" />
          </form>
        </div>
      </div>

    </div>
  )
}