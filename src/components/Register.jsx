import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container text-center mt-5" style={{ maxWidth: "400px" }}>
      <h2>Register</h2>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          className="form-control mb-3"
          style={{ width: "100%" }}
        />
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
        <button className="btn btn-primary w-100">Register</button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
