import React, { useState } from "react";
import styles from "./style.module.css";
import { Button } from "@material-ui/core";
import {auth} from "../firebase";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  
  const history = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
        .then( auth => {
            history("/")
        })
        .catch(err => {
            alert(err.message)
        })
}
const register = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history("/")
        })
        .catch(err => {
            alert(err.message)
        })
}


  return (
    <div className={styles.wrapper}>
      <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className={styles.loginLogo}/>
      </Link>
      <div className={styles.formWrapper}>
        <form>
          <h1 className={styles.titleLogin}> Sign-in </h1>
          <label for="email">E-mail</label>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" id="email"></input>
          <label for="password"> Password </label>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" id="password"></input>
          <Button
            onClick={signIn} 
            size="small"
            style={{
              background: "#f3a847",
              padding: "5px",
              borderRadius: "4px",
              marginTop: "25px",
              borderColor: 'text.primary'
            }}
          >
            {" "}
            Sign in{" "}
          </Button>
          <p className={styles.advice}>By continuing, you agree to the Amazon's Fake Clone Conditions of Use and Privacy Notice.</p>
          <Button
            onClick={register}
            size="small"
            style={{
              background: "#EAEDEe",
              padding: "5px",
              borderRadius: "4px",
              marginTop: "10px",
              border: 1,
              borderColor: 'text.primary'
            
            }}
          >
            {" "}
            Create your Amazon Account{" "}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
