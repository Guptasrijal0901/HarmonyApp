// "use client"
import React, { useState } from 'react'
import "./Header.css";

const Header = () => {
const [ourHarmony, setourHarmony] = useState([]);
const [email, setemail] = useState("");
const [name, setname] = useState("");
const [harmony, setharmony] = useState("");

const createHarmony = (e) =>{
  const trimmedEmail = email.trim();
  const trimmedName = name.trim();
  const trimmedHarmony = harmony.trim();
  // check if any of the trimmed values are empty before procedding

  if (!trimmedEmail) {
    alert("Enter Your Email")
    return;
  }
  if (!trimmedName) {
    alert("Enter Your Name")
    return;
  }
  if (!trimmedHarmony) {
    alert("Enter Your Harmony")
    return;
  }
  const oldHarmony = [...ourHarmony]
  const UpHarmony = {
    email : trimmedEmail,
    name: trimmedName,
    harmony: trimmedHarmony
  };
  oldHarmony.push(UpHarmony)
  setourHarmony(oldHarmony);
  e.preventDefault();
  // Reset input fields
  setemail("");
  setname("");
  setharmony("");
}
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
<label>Email address</label>
<input type="email" className="form-control" 
value={email}
onChange={(e)=>{
// console.log(e.target.value)
setemail(e.target.value)
}}/>
</div>
<div className="mb-3">
<label>Name</label>
<input type="text" className="form-control" 
value={name}
onChange={(e)=>{
setname(e.target.value)
}}/>
</div>
<div className="mb-3">
<label>Your Harmony</label>
<input className="form-control"  
value={harmony}
onChange={(e)=>{
setharmony(e.target.value)
}}/>
</div>
<div>
<a className="btn btn-primary" href="/" type="button"
onClick={createHarmony}>Submit</a>
</div>
{/* Display entered data */}
{ourHarmony.map((v, i) => (
  <div key={i}>
    <h1>Your Harmony</h1>
    <ul>
      <li>Email: {v.email}</li>
      <li>Name: {v.name}</li>
      <li>Harmony: {v.harmony}</li>
    </ul>
    <button
      onClick={() => setourHarmony((oldHarmony) => oldHarmony.filter((_, index) => index !== i))}
      type='button'
    >
      Delete
    </button>
  </div>
))}
</div>
</div>
);
}
export default Header;
