import React, { Component } from "react";
import "./App.css";
import HeizungsSteuerung from "./HeizungsSteuerung/HeizungsSteuerung";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeizungsSteuerung area={"areaSautter"} />
      </div>
    );
  }
}

export default App;
