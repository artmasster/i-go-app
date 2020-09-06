import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { Link, useHistory } from "react-router";
import "./Login.css";

import firebase from "../Firebase";

const Login = () => {
  const history = useHistory();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(input.email, input.password)
      .then((res) => {
        console.log(res);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(input.email, input.password)
      .then((res) => {
        console.log(res);
        alert("register!");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        console.log(res);
        alert("logout!");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="Login">
          <input
            type="email"
            placeholder="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          <button onClick={login}>Login</button>
          <button onClick={register}>Register</button>
          <button onClick={logout} style={{ backgroundColor: "red" }}>
            Logout
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
