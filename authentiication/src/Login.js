import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import swal from "sweetalert";

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  function validate(event) {
    event.preventDefault();
    if (username === "javascript" && pass === "jsx") {
      // alert('Login Sucessfull');
      swal({
        title: "Login Sucessfull!",
        text: "congratulations buddyy!",
        icon: "success",
        button: "Aww yiss!",
      });
    } else {
      // alert('Try Again !');
      swal({
        title: "Login Failed!",
        text: "Try again Bruh!!",
        icon: "error",
      });
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1>User Authentication</h1>

          <form onSubmit={validate}>
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
