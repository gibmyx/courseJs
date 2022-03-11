import React from 'react'
import ReactDOM from 'react-dom'
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./component/CounterApp";
import "./index.css";

const saludo = <h1>Hola mundo</h1>;
const root = document.getElementById("root")

ReactDOM.render(
  <CounterApp value={50}/>,
  root
)
