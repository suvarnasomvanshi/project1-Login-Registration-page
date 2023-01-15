import React, { useState } from "react";
import Header from "./Header/Header";
import { NavLink } from "react-router-dom";

import login from "./Login.module.css";

function Login() {
  const [input, setInput] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));

    const user = userData.find((user) => user.username === input.username);
    if (user) {
      if (user.password === input.password) {
        alert("login successfull");
      } else {
        alert("invalid password");
      }
    } else {
      alert("User undefined");
    }
    setInput("");
  };
  return (
    <>
      <Header />
      <div className={login.formContainer}>
        <form className={login.form} onSubmit={handleSubmit}>
          <img
            className={login.img}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            alt="user-img"
          />

          <div className={login.username}>
            <i className="material-icons">person</i>
            <input
              name="username"
              value={input.username}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="text"
              // required
              placeholder="Username"
            />
            {/* {errors.username && (
              <span style={{ color: " red" }}>*Username*is mandatory</span>
            )} */}
          </div>

          <div className={login.password}>
            <i className="material-icons">lock</i>
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="password"
              placeholder="Password"
              // required
            />
          </div>
          <div className={login.registerLogin}>
            <p>
              Didn't have an account?<NavLink to="/Register">Register</NavLink>
            </p>
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
