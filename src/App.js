import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, isLogged } from "./redux/actions/actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLoggedIn = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <div>
        <button onClick={() => dispatch(isLogged())}>
          {isLoggedIn ? "Hide" : "Show"}
        </button>
        {isLoggedIn && <h3>Members only</h3>}
      </div>
    </div>
  );
}

export default App;
