import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWork from "./HelloWork";
import reportWebVitals from './reportWebVitals';
import PeopleInterfas from "./Interfaces/PeopleInterfas";
import People from "./Class/People";
// const firstName: String = "Gibmyx"
const people: PeopleInterfas = new People("Gibmyx", "Gomez")


ReactDOM.render(
  <React.StrictMode>
      <HelloWork
          people={people}
      />
  </React.StrictMode>,
  document.getElementById('root')
);

function tick() {
    const element = (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root2'));
}
setInterval(tick, 1000);
reportWebVitals();
