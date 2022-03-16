import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./component/CounterApp";
import "./index.css";

const root = document.getElementById("root")

// ReactDOM.render(<PrimeraApp saludo="Hola Gibmyx" subtitulo="Mi primera app"/>, root)
ReactDOM.render(<CounterApp value={50}/>, root)
