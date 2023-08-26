import  { useState } from "react";
import { Button } from "react-bootstrap";
import { userAuth } from "./Auth";

export default function Login() {
  let [user, setUser] = useState();

  let auth = userAuth();

  function addData() {
    auth.login(user);
  }
  return (
    <>
      <h1>Login</h1>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <Button variant="primary" onClick={() => addData()}>
        Login
      </Button>
    </>
  );
}
