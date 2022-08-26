import React from "react";
import "./App.css";
import { Header } from "./Assets/components/header/headers";
import { Allroutes } from "./Assets/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Allroutes />
    </div>
  );
}

export default App;
