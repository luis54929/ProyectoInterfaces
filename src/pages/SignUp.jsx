import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [passwordFlag, setPasswordFlag] = useState(true);
  const [validCred, setValidCred] = useState("good");
  const [checking, setChecking] = useState(false);

  const firebase = useFirebaseApp();
  const user = useUser();

  const checkPassword = () => {
    if (password === confpassword) {
      setPasswordFlag(true);
      setChecking(true);
      submit();
    } else {
      setPasswordFlag(false);
    }
  };

  const submit = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        props.history.push("/");
        setValidCred("good");
      })
      .catch((err) => {
        console.log(err);
        if (validCred === "auth/weak-password") setValidCred(err.message);
        else if (validCred === "auth/email-already-in-use")
          setValidCred(err.message);
        else setValidCred(err.message);
      })
      .finally(() => {
        setChecking(false);
      });
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
                  id="floatingEmail"
                  placeholder="name@example.com"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <label for="floatingEmail">Email address</label>
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
                <p className="text-danger">Passwords do not match</p>
              ) : (
                ""
              )}

              {!(validCred === "good") ? (
                <p className="text-danger">{validCred}</p>
              ) : (
                ""
              )}

              <button
                class="w-100 mx-auto d-block btn btn-lg btn-primary p-2"
                type="submit"
                onClick={checkPassword}
                aria-disabled={checking ? "true" : "false"}
              >
                {checking ? (
                  <div>
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </div>
                ) : (
                  "Sign Up"
                )}
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
