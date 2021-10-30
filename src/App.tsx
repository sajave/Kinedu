import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import {Areas} from "./components/areas/Areas";

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Areas} />
    </div>
  );
}

export default App;
