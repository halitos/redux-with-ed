import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLoggedIn = useSelector((state) => state.loggedReducer);
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button>+</button>
      <button>--</button>
      {isLoggedIn && <h3>Members only</h3>}
    </div>
  );
}

export default App;
