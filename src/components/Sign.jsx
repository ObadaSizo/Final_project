import React, { useState } from "react";
import "../style/Sign.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Sign(){

  const[email,setEmail] = useState();
  const[name,setName] = useState();
  const[password,setPassword] = useState();
  const navigate = useNavigate();
  
  const signin = (event)=> {
    event.preventDefault();
    axios
        .post("http://127.0.0.1:8000/api/register", {
          name,
          username:'ahd',
          email,
          password,
        })
        .then((res) => {
          if (res.status === 201) {
            navigate("/SignIn");
          }
        });
      }
    return(
        <>
        <div className="sign-container">
          <div className="left-sec">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <Link to="/log-in" className="trans">Sign In</Link>
          </div>
          <div className="right-sec">
            <h2>Creat Account</h2>
            <p>Sign up for an account</p>
            <form onSubmit={signin}>
              <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)}/>
              <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
              <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
              <input type="submit" value={"Sign Up"}/>
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

export default Sign;

