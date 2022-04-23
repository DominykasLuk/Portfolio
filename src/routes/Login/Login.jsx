import React from 'react'
import './login.css'
import { Link } from "react-router-dom";


function Login() {
  return (
    <section id='login'>
      <h5>What Skills I have</h5>
      <h2>Login</h2>
      <div className="container login__container">
        <div className="login">
          <div className="login__content">
            <form className='login__details' action=''>
              <input placeholder="Username" />
              <input placeholder="Password" />
              <button type='submit' className='btn btn-primary'>Login</button>
            </form>
          </div>
        </div>
        <div className="login__links">
          <Link to="/" className='btn back'>Home</Link>
          <Link to="/register" className='btn back'>Register</Link>
        </div>
      </div>
    </section>
  )
}

export default Login