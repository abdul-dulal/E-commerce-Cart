import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import auth from "../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/shop");
  }
  const handleSubmit = () => {
    signInWithEmailAndPassword(email, password);
    console.log("success");
  };

  return (
    <div className="from-container">
      <div>
        <h1 className="from-title">Login</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input
              required
              onBlur={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="input-group">
            <label htmlFor="password"> Password</label>
            <input
              required
              onBlur={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              name=""
              id=""
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>loading.....</p>}
          <input
            required
            onClick={handleSubmit}
            className="from-submit"
            type="submit"
            value="Login"
          />
        </form>
        <p>
          new to amazon
          <Link to={"/signup"} className="from-link">
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
