import React, { useState } from "react";
import { Link } from "react-router-dom";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
// import { Redirect } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validCred, setValidCred] = useState("good");
  const [checking, setChecking] = useState(false);

  const user = useUser();
  const firebase = useFirebaseApp();

  const submit = async () => {
    setChecking(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.history.push("/");
        setValidCred("good");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") setValidCred(err.message);
        else if (err.code === "auth/wrong-password")
          setValidCred("Invalid password");
        else if (err.code === "auth/user-not-found")
          setValidCred("This e-mail does not match any user");
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
    <div>
      {!user.data && (
        <body className="row pt-5 mt-5 align-items-center">
          <div className="col"></div>
          <div className="col">
            <body class="text-center-fluid">
              <div>Welcome. Please login.</div>
              <div className="form-floating p-1">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="e-mail"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <label for="floatingEmail">e-mail</label>
              </div>

              <div className="form-floating p-1">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(ev) => setPassword(ev.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>

              {!(validCred === "good") ? (
                <p className="text-danger">{validCred}</p>
              ) : (
                ""
              )}

              <button
                className="w-100 btn btn-lg btn-primary p-1"
                type="submit"
                onClick={submit}
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
              <p className="p-1">
                Forgot password? | Don't have a account yet? &nbsp;
                <Link to="/signup">Sign Up</Link>
              </p>
            </body>
          </div>

          <div className="col"></div>
        </body>
      )}
      {user.data && (
        <div className="pt-5">
          <center>
            You are already logged in. Would you like to log out?
            <div className="pt-3">
              <button
                className="d-block btn btn-lg btn-primary p-1"
                onClick={logout}
              >
                Log Out
              </button>
            </div>
          </center>
        </div>
      )}
    </div>
  );
}
