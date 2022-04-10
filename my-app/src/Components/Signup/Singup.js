import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const Singup = () => {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [confirmPassowrd, setconfirmPassowrd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(email, passowrd);
  };
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  if (user) {
    navigate("/shop");
  }

  return (
    <div className="from-container">
      <div>
        <h1 className="from-title">SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              onBlur={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password"> Password</label>
            <input
              required
              type="password"
              onBlur={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              onBlur={(event) => {
                setconfirmPassowrd(event.target.value);
              }}
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input
            required
            className="from-submit"
            type="submit"
            value="SignUp"
          />
        </form>
        <p>
          Already have an accoutn
          <Link to={"/login"} className="from-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Singup;
