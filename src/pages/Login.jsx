import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <body className="row pt-5 mt-5 align-items-center">
      <div className="col"></div>
      <div className="col">
        <body class="text-center-fluid">
          <div>Welcome. Please login.</div>
          <div className="form-floating p-1">
            <input
              type="username"
              className="form-control"
              id="floatingInput"
              placeholder="username"
            />
            <label for="floatingInput">Username</label>
          </div>

          <div className="form-floating p-1">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary p-1" type="submit">
            Sign in
          </button>
          <p clasName="p-1">
            Forgot password? | Don't have a account yet? &nbsp;
            <Link to="/signup">Sign Up</Link>
          </p>
        </body>
      </div>

      <div className="col"></div>
    </body>
  );
}
