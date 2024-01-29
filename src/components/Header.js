import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">HarmonyList</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/About">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className='entries'>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput2" className="form-label">Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Harmony</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
</div>
</div>
    </div>
  )
}

export default Header