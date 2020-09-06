import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Home.css";

import firebase from "../Firebase";

const Home = () => {
  const [location, setLocation] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    firebase
      .firestore()
      .collection("location")
      .onSnapshot((data) => {
        let docs = [];
        data.forEach((d) => docs.push(d));
        setLocation(docs.map((doc) => Object({ id: doc.id, ...doc.data() })));
      });
  }, []);

  const like = (l) => {
    console.log(l);
    firebase
      .firestore()
      .collection("location")
      .doc(l.id)
      .update({
        like: l.like + 1,
      });
  };

  const add = () => {
    firebase.firestore().collection("location").add({
      name: name,
      like: 0,
      image: "",
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="Home">
          {location.map((l, i) => (
            <div key={i} className="box">
              <div
                className="img"
                style={{ backgroundImage: `url(${l.image})` }}
              ></div>
              <span>{l.name} </span>
              <span className="like" onClick={() => like(l)}>
                {l.like} ♥
              </span>
            </div>
          ))}
          <div className="input">
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={add}>+ Add</button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
