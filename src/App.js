import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "../src/components/counter/Counter";
import { Provider } from "react-redux";
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
