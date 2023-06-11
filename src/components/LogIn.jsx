import React, { useState } from "react";
import "../style/Log.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LogIN(){
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const navigate = useNavigate();
  
  const signup = (event)=> {
    event.preventDefault();
    axios
        .post("http://127.0.0.1:8000/api/login", {
          email,
          password
        })
        .then((res) => {
          if (res.status === 200) {
            navigate("/log-in");
          }
        });
      }

    return(
        <>
        <div className="log-container">
          <div className="left-sec-log">
            <h2>hello, fan!</h2>
            <p>Enter your personal details and start journey with us</p>
            <Link to="/sign-up" className="trans">Sign Up</Link>
          </div>
          <div className="right-sec-log">
            <h2>Sign in</h2>
            <p>Welcome back! please login to your account</p>
            <form onSubmit={signup}>
              <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
              <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
              <div className="c">
              <input type="checkbox" name="check" id="" className="ch"/>
              <label htmlFor="check">Remember Me</label>
              <span>Forget Password ?</span>
              </div>
              <input type="submit" value={"Login"}/>
            </form>
            <div className="links-sign">
          <Link to="/" className="home-link">Home</Link>
          <Link to="/about" className="home-link">About</Link>
          <Link to="/squad" className="home-link">Squad</Link>
          <Link to="/fans-zone" className="home-link">Fans Zone</Link>
            </div>
          </div>
        </div>
        </>
    )
}

export default LogIN;

