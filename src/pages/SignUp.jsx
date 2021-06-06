import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [passwordFlag, setPasswordFlag] = useState(true);

  const firebase = useFirebaseApp();
  const user = useUser();

  const checkPassword = () => {
    if (password === confpassword) {
      setPasswordFlag(true);
      submit();
    } else {
      setPasswordFlag(false);
    }
  };

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    console.log("loggin out?");
    console.log(user);
    await firebase.auth().signOut();
  };

  return (
    <div className="row pt-3 mt-3 align-items-center">
      {!user.data && (
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
                  onChange={(ev) => setEmail(ev.target.value)}
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
                  onChange={(ev) => setPassword(ev.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating p-1">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="ConfirmPassword"
                  onChange={(ev) => setConfpassword(ev.target.value)}
                />
                <label for="floatingPassword">Confirm password</label>
              </div>

              {!passwordFlag ? (
                <p className="redtext">Passwords do not match</p>
              ) : (
                ""
              )}

              <button
                class="w-100 mx-auto d-block btn btn-lg btn-primary p-2"
                type="submit"
                onClick={checkPassword}
              >
                Sign Up
              </button>
            </body>
          </div>

          <div className="col"></div>
        </div>
      )}
      {user.data && (
        <div>
          <center>
            <p>
              You are already logged in. If you want to sign up another user
              please log out first.
            </p>
            <button
              className="d-block btn btn-lg btn-primary p-2"
              type="submit"
              onClick={logout}
            >
              Log Out
            </button>
          </center>
        </div>
      )}
    </div>
  );
}
