import React from 'react'
import "./About.css"
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
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
        </ul>
      </div>
    </div>
  </nav>
  <div className='main'>
  Welcome to HarmonyList, your personal haven for tranquility and organization! 
  This unique app, crafted with the power of 
  MERN (MongoDB, Express.js, React, Node.js) development, 
  is designed to bring harmony into your daily life.
  <br>
  </br>
  <br>
  </br>

Simply start by entering your name and email,
and you're ready to embark on a journey of mindful living. In the "Harmony Details" section, 
share those little things that bring you peace and joy. Whether it's a favorite hobby, a calming routine, or a special moment, 
HarmonyList is here to help you keep track of what makes your soul sing.
<br>
  </br>
  <br>
  </br>
With a user-friendly interface and the seamless integration of MERN technologies, 
our app ensures a smooth and responsive experience. Stay organized, stay harmonious. 
Welcome to a world where your to-do list is not just about tasks, but about cultivating a balanced and fulfilling life.
<br>
  </br>
  <br>
  </br>
HarmonyList - because harmony begins with you.
<br>
  </br>
  <br>
  </br>
  <div>
  <button className='btn btn-primary'
  type='button'
  onClick={()=> navigate("/start")}> Let's start </button>
  <br>
  </br>
  <br>
  </br>
  </div>
  </div>
  </div>
  )
}

export default About;