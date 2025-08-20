import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [signState, setSignState] = useState("Sign Up");
  return (
    <div className="login">
      <div className="login-form">
        <h2>{signState}</h2>

        <form>
          {signState === "Sign Up" ? (
            <input type="text" required placeholder="Enter Name" />
          ) : (
            <></>
          )}
          <input type="email" required placeholder="Enter mail" />
          <input type="password" required placeholder="Enter password" />
          <button>{signState}</button>
        </form>

        <div className="form-remember">
          <div className="remember">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <span>Need help?</span>
        </div>
        <div className="form-switch">
          {signState === "Sign Up" ? (
            <p>
              Already have an account?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In
              </span>
            </p>
          ) : (
            <p>
              New to Neflish?
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
