import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBaOhFLaSTLobmheKSxpufF7o5e0iX5G2U",
  authDomain: "alcance-clientes.firebaseapp.com",
  databaseURL: "https://alcance-clientes.firebaseio.com",
  projectId: "alcance-clientes",
  storageBucket: "alcance-clientes.appspot.com",
  messagingSenderId: "311561965386"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
