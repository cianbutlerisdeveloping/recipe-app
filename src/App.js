import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "c194ec8d";
  const APP_KEY = "a7203f5defb7a280b3a0389f353eb02d";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="app">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
