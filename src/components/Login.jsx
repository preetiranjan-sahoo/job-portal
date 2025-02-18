import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container text-center mt-5" style={{ maxWidth: "400px" }}>
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          style={{ width: "100%" }}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          style={{ width: "100%" }}
        />
        <button className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
