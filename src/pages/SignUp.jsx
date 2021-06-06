import React from "react";

export default function SignUp() {
  return (
    <div className="row pt-3 mt-3 align-items-center">
      <div className="col"></div>
      <div className="col">
        <body class="text-center-fluid">
          <p>Welcome. Please Sign Up.</p>
          <div class="form-floating p-1">
            <input
              type="firstname"
              class="form-control"
              id="floatingInput"
              placeholder="firstname"
            />
            <label for="floatingInput">First name</label>
          </div>
          <div class="form-floating p-1">
            <input
              type="lastname"
              class="form-control"
              id="floatingInput"
              placeholder="lastname"
            />
            <label for="floatingInput">Last name</label>
          </div>

          <div class="form-floating p-1">
            <input
              
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>

          <div class="form-floating p-1">
            <input
              type="username"
              class="form-control"
              id="floatingInput"
              placeholder="username"
            />
            <label for="floatingInput">Username</label>
          </div>

          <div class="form-floating p-1">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-floating p-1">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="ConfirmPassword"
            />
            <label for="floatingPassword">Confirm password</label>
          </div>

          <button
            class="w-100 mx-auto d-block btn btn-lg btn-primary p-2"
            type="submit"
          >
            Sign Up
          </button>
        </body>
      </div>

      <div className="col"></div>
    </div>
  );
}
